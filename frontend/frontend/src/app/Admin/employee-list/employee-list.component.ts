import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee:any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;

  length: any;
  isActive = false;

  toggleActiveState() {
    this.isActive = !this.isActive;
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private rout: ActivatedRoute,
              private routes: Router,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })

    this.loadEmployee()
    this.employeeService.getAllEmployee().subscribe((result) => {
      this.employee = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.employee)

    })
  }

  loadEmployee(){

    this.employeeService.getAllEmployee().subscribe((data:any)=>{
      //console.log(data);
      this.employee =data;
    })
  }
  deleteEmployee(employeeId:number){
    this.employeeService.deleteEmployee(employeeId).subscribe(data=>{
      console.log(data);
      alert("Employee Deleted")
      this.loadEmployee()
      this.routes.navigate(['/EmployeeList']);
    })
  }

}

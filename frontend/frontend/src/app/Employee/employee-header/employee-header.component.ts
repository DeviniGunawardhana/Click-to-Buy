import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Employee} from "../../Models/Employee/Employee";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.scss']
})
export class EmployeeHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>=new EventEmitter();

  employeeId !:number
  employee!: any
  constructor(private  formBuilder:FormBuilder,
              private Url:ActivatedRoute,
              private routes:Router,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeId =this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);

    this.employee = new Employee();
    this.employeeService.singleEmployee(this.employeeId).subscribe(data=>{
      this.employee = data;
    });
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }


}

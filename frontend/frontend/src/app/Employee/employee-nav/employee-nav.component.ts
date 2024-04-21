import { Component, OnInit } from '@angular/core';
import {Employee} from "../../Models/Employee/Employee";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../services/item/item.service";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.scss']
})
export class EmployeeNavComponent implements OnInit {
  employeeId !:number
  employee!: any
  constructor(private  fb:FormBuilder,
              private routes:Router,
              private itemService:ItemService,
              private Url:ActivatedRoute,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeId =this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);

    this.employee = new Employee();
    this.employeeService.singleEmployee(this.employeeId).subscribe(data=>{
      this.employee = data;
    });


  }

}

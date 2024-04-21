import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {Employee} from "../../Models/Employee/Employee";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
editEmployee:any
  employee: Employee = new Employee();
employeeId:any
  selected = 'option2'
  constructor(private  formBuilder:FormBuilder,
              private Url:ActivatedRoute,
              private routes:Router,
              private employeeService:EmployeeService) {
    this.editEmployee= formBuilder.group
    ({
      "businessName": new FormControl(null,Validators.required),
      "userName": new FormControl(null,Validators.required),
      "businessType": new FormControl(null,Validators.required),
      "confirmPassword": new FormControl(null,Validators.required),
      "employeeAddress": new FormControl(null,Validators.required),
      "employeeEmail": new FormControl(null,Validators.required),
      "employeeName": new FormControl(null,Validators.required),
      "employeeNumber": new FormControl(null,Validators.required),
      "employeePassword": new FormControl(null,Validators.required),
      // "gender": new FormControl(null,Validators.required),
      "nic": new FormControl(null,Validators.required),

    });
  }



  ngOnInit(): void {
    this.employeeId =this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);
    this.employeeService.singleEmployee(this.employeeId).subscribe(data=>{
      this.editEmployee.patchValue(data);

    })
  }

  onSubmit() {
    console.log(this.editEmployee.value)
    this.employeeService.updateEmployee(this.employeeId, this.editEmployee.value).subscribe((data: any) => {
      console.log(data);
      this.routes.navigate(['/EmployeeList']);
    }, error => console.log(error));
  }
  goToEmployeeList(){
    this.routes.navigate(['/employeeList']);
  }

}

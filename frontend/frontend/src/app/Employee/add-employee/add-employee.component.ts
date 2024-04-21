import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
    addEmployee: any
    selected = 'option2'

    constructor(private fb: FormBuilder,
                private routes: Router,
                private employeeService: EmployeeService) {

        this.addEmployee = fb.group
           (    {
                "businessName": new FormControl(null, Validators.required),
                "userName": new FormControl(null, Validators.required),
                "businessType": new FormControl(null, Validators.required),
                "confirmPassword": new FormControl(null, [Validators.required, Validators.minLength(3)]),
                "employeeAddress": new FormControl(null, [Validators.required]),
                "employeeEmail": new FormControl(null, [Validators.required, Validators.email]),
                "employeeName": new FormControl(null, Validators.required),
                "employeeNumber": new FormControl(null,
                    [
                        Validators.required,

                    ]),
                "employeePassword": new FormControl(null, Validators.required),
                // "businessType": new FormControl(null, Validators.required),
                "nic": new FormControl(null, Validators.required)
            });
    };

    ngOnInit(): void {

    }

    onSubmit() {
        if(this.addEmployee.valid){
            console.log(this.addEmployee.value);
            this.employeeService.addEmployee(this.addEmployee.value).subscribe((data: any) => {
                console.log(data);
                alert('Now You Register')
                    this.routes.navigate(['/employeeLogin']);

            })
        }else
        {
            alert('ERROR MESSAGE, Checked Again!!')
        }

    }

}

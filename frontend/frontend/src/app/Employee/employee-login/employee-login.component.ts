import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router, Routes} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {
employeeEmail : string="";
employeePassword: string ="";
employeeId:any;

isLogin:boolean=true;
loginEmployee:any
  constructor(private http:HttpClient,
              private routes:Router,
              private fb: FormBuilder,) {}


  ngOnInit(): void {

  }

  login(){
    console.log(this.employeeEmail);
    console.log(this.employeePassword);
    console.log(this.employeeId)


    let bodyData ={
      employeeEmail:this.employeeEmail,
      employeePassword:this.employeePassword,

    };
    this.http.post("http://localhost:4000/api/v1/employee/login", bodyData).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData.message == "Login Failed"){
        alert("Email not exit");
      }else if(resultData.message == "Login Success"){
        alert("Success Login");

        this.routes.navigate(['/EmployeeDashboard/'+this.employeeId]);
      }else {
        alert("Incorrect Email or Password")
      }


      })
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminEmail : string="";
  adminPassword: string ="";
  adminId:any;
  loginAdmin:any
  isLogin:boolean=true;
  constructor(private http:HttpClient,
              private routes:Router,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.adminEmail);
    console.log(this.adminPassword);

    let bodyData ={
      adminEmail:this.adminEmail,
      adminPassword:this.adminPassword,

    };
    this.http.post("http://localhost:4000/api/v1/admin/login", bodyData).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData.message == "Login Failed"){
        alert("Email not exit");
      }else if(resultData.message == "Login Success"){
        alert("Success Login");

        this.routes.navigate(['/adminDashboard']);
      }else {
        alert("Incorrect Email or Password")
      }


    })
  }
}

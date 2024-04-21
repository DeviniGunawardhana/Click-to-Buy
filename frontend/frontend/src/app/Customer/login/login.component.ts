import { Component, OnInit } from '@angular/core';
import{MatDialog} from "@angular/material/dialog";
import {CustomerLoginComponent} from "../customer-login/customer-login.component";
import {CustomerService} from "../../services/customer/customer.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  customerName:string="";
  customerPassword:string="";
  customerId:any
  alert:boolean=false
  constructor(public dialog: MatDialog,
              private customerService:CustomerService,
              private http:HttpClient,
              private routes:Router) { }

  ngOnInit(): void {

  }
  openDialog1() {
    this.dialog.open(CustomerLoginComponent, {
      width:'450px',
      height:'530px'

    });
  }


  login(){
    console.log(this.customerName);
    console.log(this.customerPassword);

    //console.log(this.customerId)


    let bodyData ={
      customerName:this.customerName,
      customerPassword:this.customerPassword,
      //customerId:this.customerId

    };
    this.http.post("http://localhost:4000/api/v1/customer/login", bodyData).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData.message == "Login Failed"){
        alert("Wrong Username or password ");
      }else if(resultData.message == "Login Success"){
        alert("Success Login");
        this.ngOnInit()
        this.routes.navigate(['/check/'+this.customerName]);

      }else {
        alert("Incorrect Email or Password")
      }


    })
  }

}

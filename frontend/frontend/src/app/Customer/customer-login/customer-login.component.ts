import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer/customer.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
addCustomer:any;
  constructor(private fb:FormBuilder,
              public dialog: MatDialog,
              private routes:Router,
              private customerService:CustomerService) {
    this.addCustomer = fb.group({
      'customerName' : new FormControl(null, Validators.required),
      'customerEmail' : new FormControl(null, [Validators.required, Validators.email]),
      'customerPassword' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }



  ngOnInit(): void {
  }

  openDialog1() {
    this.dialog.open(LoginComponent, {
      width:'450px',
      height:'530px'

    });
  }

  onSubmit() {
    if(this.addCustomer.valid){
      console.log(this.addCustomer.value);
      this.customerService.addCustomer(this.addCustomer.value).subscribe((data: any) => {
        console.log(data);
        alert('Now You Register')

      })
    }else
    {
      alert('ERROR MESSAGE, Checked Again!!')
    }

  }


}

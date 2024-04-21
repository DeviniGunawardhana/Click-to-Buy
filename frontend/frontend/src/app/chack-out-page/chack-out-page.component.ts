import { Component, OnInit } from '@angular/core';
import {OrdersModule} from "../Models/orders/orders.module";
import {render} from "creditcardpayments/creditCardPayments";
import {Employee} from "../Models/Employee/Employee";
import {CustomerService} from "../services/customer/customer.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../Models/customer/customer";
@Component({
  selector: 'app-chack-out-page',
  templateUrl: './chack-out-page.component.html',
  styleUrls: ['./chack-out-page.component.scss']
})
export class ChackOutPageComponent implements OnInit {
  order:OrdersModule = new OrdersModule();
  customerId !: any
  customerName:any
  customer !: any
  addDetails:any
  editCustomer:any
  constructor(private  customerService:CustomerService,
              private Url:ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.customerId =this.Url.snapshot.params['customerId'];
    console.log(this.customerId);

    this.customer = new Customer();
    this.customerService.singleCustomerByName(this.customerId).subscribe(data=>{
      this.customer = data;
    });


    render({
      id: "#myPaypalButton",
      currency: "USD",
      value: "50.00",
      onApprove: (details) => {
        alert("Transaction Successfully")
      }

    });
  }

}

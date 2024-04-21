import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../services/item/item.service";
import {EmployeeService} from "../../services/employee/employee.service";
import {OrderService} from "../../services/order/order.service";
import {Item} from "../../Models/item/Item";
import {Orders} from "../../Models/orders/Orders";

@Component({
  selector: 'app-employee-order',
  templateUrl: './employee-order.component.html',
  styleUrls: ['./employee-order.component.scss']
})
export class EmployeeOrderComponent implements OnInit {
  employeeId !:number
  employee!: any
  order!:any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;
  constructor(private  fb:FormBuilder,
              private routes:Router,
              private orderService:OrderService,
              private Url:ActivatedRoute,
              ) { }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.employeeId =this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);

    this.order = new Orders();
    this.orderService.getOrderByEmployee(this.employeeId).subscribe(data=>{
      this.employee = data;
      console.log(data)
    });

    this.loadOrder()
    this.orderService.getOrderByEmployee(this.employeeId).subscribe((result) => {
      this.order = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.order)

    })
  }

  loadOrder(){

    this.orderService.getOrderByEmployee(this.employeeId).subscribe((data:any)=>{
      //console.log(data);
      this.order =data;
    })
  }


}

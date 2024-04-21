import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customer:any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;
  data:any
  length: any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private rout: ActivatedRoute,
              private routes: Router,
              private customerService:CustomerService) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })

    this.loadEmployee()
    this.customerService.getAllCustomer().subscribe((result) => {
      this.customer = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.customer)

    })
  }
  loadEmployee() {

    this.customerService.getAllCustomer().subscribe((data: any) => {
      //console.log(data);
      this.customer = data;
    })

  }
  deleteCustomer(customerId:number){
    this.customerService.deleteCustomer(customerId).subscribe(data=>{
      console.log(data);
      alert("customer Deleted")
      this.routes.navigate(['/CustomerList']);
    })
  }


}

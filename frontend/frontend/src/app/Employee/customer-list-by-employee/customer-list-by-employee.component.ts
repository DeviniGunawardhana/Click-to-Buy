import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
  selector: 'app-customer-list-by-employee',
  templateUrl: './customer-list-by-employee.component.html',
  styleUrls: ['./customer-list-by-employee.component.scss']
})
export class CustomerListByEmployeeComponent implements OnInit {
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
  }

}

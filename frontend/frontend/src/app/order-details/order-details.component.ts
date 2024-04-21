import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../services/order/order.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;
  order:any
  data:any
  length: any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private rout: ActivatedRoute,
              private routes: Router,
              private  orderServer: OrderService) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })
    this.loadOrder()
    this.orderServer.getAllOrderDetails().subscribe((result) => {
      this.order = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.order)

    })
  }
  loadOrder() {

    this.orderServer.getAllOrderDetails().subscribe((data: any) => {
      //console.log(data);
      this.order = data;
    })
  }

}

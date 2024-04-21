import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartData, ChartType} from "chart.js";
import {HttpClient} from "@angular/common/http";
import {MatCalendar} from "@angular/material/datepicker";
import {EmployeeService} from "../../services/employee/employee.service";
import {CustomerService} from "../../services/customer/customer.service";
import {ItemService} from "../../services/item/item.service";
import {OrderService} from "../../services/order/order.service";


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  employee:any
  customer:any
  item:any;
  order:any
  pieChartData!: ChartData<ChartType, number[], string>;
  pieChartLabels: string[] = [];
  sideBarOpen = true;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private http : HttpClient,
              private employeeService:EmployeeService,
              private customerService:CustomerService,
              private orderService:OrderService,
              private itemService:ItemService) { }

  ngOnInit(): void {
    this.loadEmployeeCount();
    this.loadCustomerCount();
    this.loadItemCount();
    this.loadOrderCount();
    this.http.get<any>('http://localhost:4000/api/v1/item/home').subscribe(data => {
      this.pieChartLabels = Object.keys(data);
      this.pieChartData = {
        labels: this.pieChartLabels,
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'grey'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', 'grey'],
          },
        ],
      };
    });


  }
  loadEmployeeCount(){

    this.employeeService.count().subscribe((data:any)=>{
      //console.log(data);
      this.employee =data;
    })
  }
  loadCustomerCount(){

    this.customerService.count().subscribe((data:any)=>{
      //console.log(data);
      this.customer =data;
    })
  }
  loadItemCount(){

    this.itemService.count().subscribe((data:any)=>{
      //console.log(data);
      this.item =data;
    })
  }
  loadOrderCount(){

    this.orderService.count().subscribe((data:any)=>{
      //console.log(data);
      this.order =data;
    })
  }
}

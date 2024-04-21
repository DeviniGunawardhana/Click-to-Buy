import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Employee} from "../../Models/Employee/Employee";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {Item} from "../../Models/item/Item";
import {Chart} from "chart.js";
import {ChartData, ChartType} from "chart.js/dist/types";
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../../services/customer/customer.service";
import {ItemService} from "../../services/item/item.service";
import {OrderService} from "../../services/order/order.service";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  sideBarOpen = true;
  pieChartData!: ChartData<ChartType, number[], string>;
  pieChartLabels: string[] = [];
  editEmployee: any
  item: any
  customer: any
  order:any
  employeeId !: number
  employee!: any

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private formBuilder: FormBuilder,
              private Url: ActivatedRoute,
              private routes: Router,
              private employeeService: EmployeeService,
              private http: HttpClient,
              private customerService: CustomerService,
              private orderService: OrderService,
              private itemService: ItemService
  ) {

  }

  ngOnInit(): void {

    this.loadEmployeeCount();
    this.loadCustomerCount();
    this.loadItemCount();
    this.loadOrderCount();
    this.employeeId = this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);

    this.employee = new Employee();
    this.employeeService.singleEmployee(this.employeeId).subscribe(data => {
      this.employee = data;
    });

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['December', 'January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Month',
          xAxisID: 'Income($)',

          data: [220, 490, 332, 1322, 750, 500,],
          backgroundColor: "#236e7e",
          borderColor: "#092d2f",
          hoverBackgroundColor: "#031f1f",
          barThickness: 40,
          borderWidth: 1
        },
        ]
      },

    });

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

  loadEmployeeCount() {

    this.employeeService.count().subscribe((data: any) => {
      //console.log(data);
      this.employee = data;
    })
  }

  loadCustomerCount() {

    this.customerService.count().subscribe((data: any) => {
      //console.log(data);
      this.customer = data;
    })
  }

  loadItemCount() {

    this.itemService.count().subscribe((data: any) => {
      //console.log(data);
      this.item = data;
    })

  }

  loadOrderCount() {

    this.orderService.count().subscribe((data: any) => {
      //console.log(data);
      this.order = data;
    })

  }
}
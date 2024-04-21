import { Component, OnInit } from '@angular/core';
import {Employee} from "../../Models/Employee/Employee";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../services/item/item.service";
import {EmployeeService} from "../../services/employee/employee.service";
import {Item} from "../../Models/item/Item";

@Component({
  selector: 'app-item-list-by-employee',
  templateUrl: './item-list-by-employee.component.html',
  styleUrls: ['./item-list-by-employee.component.scss']
})
export class ItemListByEmployeeComponent implements OnInit {
  employeeId !:number
  employee!: any
  item!:any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;
  constructor(private  fb:FormBuilder,
              private routes:Router,
              private itemService:ItemService,
              private Url:ActivatedRoute,
              private employeeService:EmployeeService) { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.employeeId =this.Url.snapshot.params['employeeId'];
    console.log(this.employeeId);

    this.item = new Item();
    this.itemService.getItemByEmployee(this.employeeId).subscribe(data=>{
      this.employee = data;
      console.log(data)
    });

    this.loadItem()
    this.itemService.getItemByEmployee(this.employeeId).subscribe((result) => {
      this.item = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.item)

    })
  }

  loadItem(){

    this.itemService.getItemByEmployee(this.employeeId).subscribe((data:any)=>{
      //console.log(data);
      this.item =data;
    })
  }

  deleteItem(itemId:number){
    this.itemService.deleteItem(itemId).subscribe(data=>{
      console.log(data);
      alert("Item deleted")
      this.loadItem()
      this.routes.navigate(['/itemByEmployees']);
    })
  }

}

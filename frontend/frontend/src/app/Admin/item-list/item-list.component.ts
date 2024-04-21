import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee/employee.service";
import {ItemService} from "../../services/item/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  item:any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;

  length: any;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private rout: ActivatedRoute,
              private routes: Router,
              private itemService:ItemService) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })
    this.loadItem()
    this.itemService.getAllItem().subscribe((result) => {
      this.item = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.item)

    })
  }
  loadItem(){

    this.itemService.getAllItem().subscribe((data:any)=>{
      //console.log(data);
      this.item =data;
    })
  }

  deleteItem(itemId:number){
    this.itemService.deleteItem(itemId).subscribe(data=>{
      console.log(data);
      alert("Item deleted")
      this.loadItem();
      this.routes.navigate(['/ItemList']);
    })
  }

}

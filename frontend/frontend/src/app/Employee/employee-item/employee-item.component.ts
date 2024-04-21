import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  item: any
  sideBarOpen = true;
  searchText: any
  totalLength: any;
  page: number = 1;

  length: any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() {
  }


  ngOnInit(): void {
  }

}

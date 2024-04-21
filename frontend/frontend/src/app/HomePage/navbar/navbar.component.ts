import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CustomerLoginComponent} from "../../Customer/customer-login/customer-login.component";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }
  openDialog() {
    this.dialog.open(CustomerLoginComponent, {
      width:'450px',
      height:'530px'

    });
  }

  ngOnInit(): void {
  }

}

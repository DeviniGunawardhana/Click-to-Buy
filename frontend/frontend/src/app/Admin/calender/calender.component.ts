import { Component, OnInit } from '@angular/core';
import * as moment from "moment/moment";



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  public minDate: Date = new Date ("05/07/2020");
  public maxDate: Date = new Date ("08/27/2026");
  public value: Date = new Date ("05/26/2023");

  constructor() { }

  ngOnInit(): void {

  }


}

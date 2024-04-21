import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  name = 'Angular 4';
  date:any;
  hours:any;
  minutes:any;
  seconds:any;
  currentLocale: any;


  test:any;
  constructor() { setInterval(() =>{
    const currentDate = new Date();
    this.date = currentDate.toLocaleTimeString();
  }, 1000);
  }



  ngOnInit(): void {
  }

}

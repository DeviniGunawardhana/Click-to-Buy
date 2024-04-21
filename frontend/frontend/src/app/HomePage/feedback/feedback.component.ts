import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  customOption: OwlOptions = {
    loop: true,
    mouseDrag: true,

    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:700,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}

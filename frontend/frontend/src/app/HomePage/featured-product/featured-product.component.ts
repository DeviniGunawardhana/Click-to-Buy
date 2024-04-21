import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplaySpeed:3000,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots:false,
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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}

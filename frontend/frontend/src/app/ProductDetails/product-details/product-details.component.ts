import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product:any
  id:any
  constructor(
      private activeRout:ActivatedRoute,
      private productService:ProductService,
      private route:Router
  ) {

  }

  ngOnInit(): void {


  }

}

import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {
  product:any
  totalLength:any;
  page:number =1;
  constructor(private productService:ProductService,
              private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct()
    this.productService.getByType().subscribe((result)=>{
      this.product =result;

    })
  }
  loadProduct(){
    this.productService.getByType().subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }

}

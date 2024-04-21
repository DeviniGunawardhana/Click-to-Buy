import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit {



  product:any
  totalLength:any;
  page:number =1;
  constructor(private productService:ProductService,
              private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct()
    this.productService.getByType2().subscribe((result)=>{
      this.product =result;

    })
  }
  loadProduct(){
    this.productService.getByType2().subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }

}


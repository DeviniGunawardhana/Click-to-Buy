import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ItemService} from "../../services/item/item.service";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product:any
  totalLength:any;
  page:number =1;
  searchText:any;
  item!: any
  constructor(private productService:ProductService,

              private Url:ActivatedRoute,
              private  itemService:ItemService,
              private cartService:CartService,
              private router:Router) { }

  ngOnInit(): void {


    this.loadProduct()
      this.productService.viewItem().subscribe((result)=>{
        this.product =result;

      })

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  loadProduct(){
    this.productService.viewItem().subscribe((data:any)=>{
      console.log(data);
      this.product = data;
    })
  }

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cartPage')
  }


}

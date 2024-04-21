import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../Models/item/Item";
import {CartService} from "../../services/cart/cart.service";
import {Review} from "../../Models/review/Review";

@Component({
  selector: 'app-product-dis',
  templateUrl: './product-dis.component.html',
  styleUrls: ['./product-dis.component.scss']
})
export class ProductDisComponent implements OnInit {
  itemId !:number

  item!: any
  name:any
  newRating:any
  newComment:any
  reviews: Review[] = [];

  addReview(name: string, rating: number, comment: string) {
    const newReview = new Review(name, rating, comment);
    this.reviews.push(newReview);
  }

  constructor(private Url:ActivatedRoute,
              private  itemService:ItemService,
              private cartService:CartService,
              private router:Router) { }

  ngOnInit(): void {

    this.itemId = this.Url.snapshot.params['itemId'];

    this.item = new Item();
    this.itemService.getItemById(this.itemId).subscribe(data=>{
      this.item = data;
    });
  }

  loadStudent() {

    this.itemService.getItemById(this.itemId).subscribe((data: any) => {
      //console.log(data);
      this.item = data;
    })
  }

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cartPage')
  }
}

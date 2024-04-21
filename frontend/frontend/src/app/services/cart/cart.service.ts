import { Injectable } from '@angular/core';
import {Item} from "../../Models/item/Item";
import {CartItem} from "../../Models/cart/CartItem";
import {Cart} from "../../Models/cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private  cart:Cart= new Cart();
  addToCart(items:Item) :void{
    let  cartItem=this.cart.items.find(item => item.item.itemId== items.itemId)
    if(cartItem){
      this.changeQuantity (items.itemId, cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(items));
  }

  removeFromCart(ItemId:number):void{
    this.cart.items=this.cart.items.filter(item=> item.item.itemId !=ItemId)
  }
  changeQuantity(quantity:number, ItemId:number){
    let cartItem=this.cart.items.find(item=>item.item.itemId===ItemId);
    if(!cartItem)return;
    cartItem.quantity=quantity;
  }
  getCart():Cart{
    return  this.cart;
  }
}

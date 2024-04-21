import {Item} from "../item/Item";

export class CartItem
{
    constructor(items:Item) {
        this.item=items;
        this.price;

    }

    item: Item ;
    quantity:number = 1;
    get price():Number{

        return  this.item.price * this.quantity ;
    }
}
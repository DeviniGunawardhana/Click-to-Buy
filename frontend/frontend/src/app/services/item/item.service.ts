import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Item} from "../../Models/item/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseURL = "http://localhost:4000/api/v1/item";
  constructor(private http:HttpClient) { }

  getAllItem(){
    return this.http.get('http://localhost:4000/api/v1/item/getAllItem');
  }
  addItem(item: any) {
    return this.http.post('http://localhost:4000/api/v1/item/save', item);
  }
  getItemById(itemId:number): Observable<Item>{
    return this.http.get<Item>(`${this.baseURL}/getById?itemId=${itemId}`);
  }

  getItemByEmployee(employeeId:number){
    return this.http.get('http://localhost:4000/api/v1/item//get-item-by-id?employeeId=' + employeeId);
}

  deleteItem(itemId:any ): Observable<Object>{
    return this.http.delete(`${this.baseURL}/deleteItem/${itemId}`);
  }

  count(){
    return this.http.get('http://localhost:4000/api/v1/item/count')
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  viewItem() {
    return this.http.get('http://localhost:4000/api/v1/item/getAllItem');
  }
  getById(id:any ){
    return this.http.get('http://localhost:4000/api/v1/item/getById?id=' + id);
  }
  getByType( ){
    return this.http.get('http://localhost:4000/api/v1/item/get-by-name?type=pottery' );
  }
  getByType2( ){
    return this.http.get('http://localhost:4000/api/v1/item/get-by-name?type=cloths' );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,) {


  }
  getAllOrder(){
    return this.http.get('http://localhost:4000/api/v1/order/get-all-order');
  }

  getOrderByEmployee(employeeId:number){
    return this.http.get('http://localhost:4000/api/v1/order/get-all-orders?employeeId=' + employeeId);
  }
  getAllOrderDetails(){
    return this.http.get('http://localhost:4000/api/v1/orderDetails/get-all-orderDetails');
  }
  count(){
    return this.http.get('http://localhost:4000/api/v1/order/count');
  }

}

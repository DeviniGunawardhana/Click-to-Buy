import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:4000/api/v1/customer";
  constructor(private http:HttpClient) { }


  addCustomer(customer: any) {
    return this.http.post('http://localhost:4000/api/v1/customer/save', customer);
  }

  getAllCustomer(){
    return this.http.get('http://localhost:4000/api/v1/customer/get-all-customer');
  }

  currentUser(){

  }

  singleCustomer(customerId:any){
    return this.http.get('http://localhost:4000/api/v1/employee/getCustomer-by-id?id=' + customerId);
  }

  deleteCustomer(customerId:any ): Observable<Object>{

    return this.http.delete(`${this.baseURL}/deleteCustomer/${customerId}`);
  }

  login(user:any){
    return this.http.get('http://localhost:4000/api/v1/customer/', user);
  }
  singleCustomerByName(customerName:any){
    return this.http.get('http://localhost:4000/api/v1/customer/getCustomer-by-name?name=' + customerName);
  }

  count(){
    return this.http.get('http://localhost:4000/api/v1/customer/count');
  }
}

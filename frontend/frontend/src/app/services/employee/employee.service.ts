import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../Models/Employee/Employee";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:4000/api/v1/employee";
  constructor(private http:HttpClient,
              ) {}

  getAllEmployee(){
    return this.http.get('http://localhost:4000/api/v1/employee/getAllEmployee1');
  }
  addEmployee(employee:any){
    return this.http.post('http://localhost:4000/api/v1/employee/save', employee);

  }
  editEmployee(editEmployee:any):Observable<Object>{
    return this.http.put('http://localhost:4000/api/v1/employee/employeeUpdate' , editEmployee);
  }

  singleEmployee(employeeId:any){
    return this.http.get('http://localhost:4000/api/v1/employee/getEmployee-by-id?id=' + employeeId);
}

  deleteEmployee(employeeId:any ): Observable<Object>{

    return this.http.delete(`${this.baseURL}/deleteEmployee/${employeeId}`);
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.baseURL}/employees/${employeeId}`, employee);
  }

  count(){
    return this.http.get('http://localhost:4000/api/v1/employee/count')
  }


}

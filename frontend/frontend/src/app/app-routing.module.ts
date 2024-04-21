import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./HomePage/home-page/home-page.component";
import {CustomerLoginComponent} from "./Customer/customer-login/customer-login.component";
import {ProductComponent} from "./ProductPage/product/product.component";
import {EmployeeLoginComponent} from "./Employee/employee-login/employee-login.component";
import {AdminLoginComponent} from "./Admin/admin-login/admin-login.component";
import {AdminDashboardComponent} from "./Admin/admin-dashboard/admin-dashboard.component";
import {ProductDetailsComponent} from "./ProductDetails/product-details/product-details.component";
import {ChackOutPageComponent} from "./chack-out-page/chack-out-page.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {EmployeeListComponent} from "./Admin/employee-list/employee-list.component";
import {CustomerListComponent} from "./Admin/customer-list/customer-list.component";
import {ItemListComponent} from "./Admin/item-list/item-list.component";
import {EmployeeDashboardComponent} from "./Employee/employee-dashboard/employee-dashboard.component";
import {AddItemComponent} from "./Employee/add-item/add-item.component";
import {AddEmployeeComponent} from "./Employee/add-employee/add-employee.component";
import {CartComponent} from "./Cart-page/cart/cart.component";
import {EditEmployeeComponent} from "./Employee/edit-employee/edit-employee.component";
import {ItemListByEmployeeComponent} from "./Employee/item-list-by-employee/item-list-by-employee.component";
import {CustomerListByEmployeeComponent} from "./Employee/customer-list-by-employee/customer-list-by-employee.component";

import {Item1Component} from "./ProductPage/item1/item1.component";
import {Item2Component} from "./ProductPage/item2/item2.component";
import {LoginComponent} from "./Customer/login/login.component";
import {MyAcountComponent} from "./Customer/my-acount/my-acount.component";

import {ProfileComponent} from "./Admin/profile/profile.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {OrdersComponent} from "./Admin/orders/orders.component";
import {EmployeeOrderComponent} from "./Employee/employee-order/employee-order.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'customerLogin',component:CustomerLoginComponent},
  {path:'LogIn',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'employeeLogin',component:EmployeeLoginComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'check/:customerId',component:ChackOutPageComponent, canActivate:[AuthGuard]},
  {path:'productDetail/:itemId',component:ProductDetailsComponent},
  {path:'EmployeeList',component:EmployeeListComponent},
  {path:'CustomerList',component:CustomerListComponent},
  {path:'ItemList',component:ItemListComponent},
  {path:'EmployeeDashboard/:employeeId',component:EmployeeDashboardComponent},
  {path:'AddItem/:employeeId',component:AddItemComponent},
  {path:'AddEmployee',component:AddEmployeeComponent},
  {path:'cartPage',component:CartComponent},
  {path:'editEmployee/:employeeId',component:EditEmployeeComponent},
  {path:'itemByEmployees/:employeeId',component:ItemListByEmployeeComponent},
  {path:'customerByEmployee/:employeeId',component:CustomerListByEmployeeComponent},
  {path:'Pottery',component:Item1Component},
  {path:'my-account',component:MyAcountComponent},
  {path:'OrderList',component:OrdersComponent},
  {path:'OrderListByEmployee/:employeeId',component:EmployeeOrderComponent},
  {path:'OrderDetails',component:OrderDetailsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'cloths',component:Item2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

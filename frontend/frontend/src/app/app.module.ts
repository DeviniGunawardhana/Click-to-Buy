import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialogModule} from "@angular/material/dialog";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { CustomerLoginComponent } from './Customer/customer-login/customer-login.component';
import { NavbarComponent } from './HomePage/navbar/navbar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { HomePageComponent } from './HomePage/home-page/home-page.component';
import { SearchBarComponent } from './HomePage/search-bar/search-bar.component';
import { SearchComponent } from './HomePage/search/search.component';
import { MainBarComponent } from './HomePage/main-bar/main-bar.component';
import { FeatursComponent } from './HomePage/featurs/featurs.component';
import { AdvertisementComponent } from './HomePage/advertisement/advertisement.component';
import {CdkListboxModule} from "@angular/cdk/listbox";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ResuntProductComponent } from './HomePage/resunt-product/resunt-product.component';
import { NewsletterComponent } from './HomePage/newsletter/newsletter.component';
import { FeaturedProductComponent } from './HomePage/featured-product/featured-product.component';
import { FeedbackComponent } from './HomePage/feedback/feedback.component';
import {CarouselsModule} from "./HomePage/carousel/carousels.module";
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { ProductPageComponent } from './ProductPage/product-page/product-page.component';
import { BreadcrumbComponent } from './ProductPage/breadcrumb/breadcrumb.component';
import { ProductComponent } from './ProductPage/product/product.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './Customer/login/login.component';
import { ProductDetailsComponent } from './ProductDetails/product-details/product-details.component';
import { ProductDisComponent } from './ProductDetails/product-dis/product-dis.component';
import { MapComponent } from './map/map.component';
import { ChackOutPageComponent } from './chack-out-page/chack-out-page.component';
import { EmployeeListComponent } from './Admin/employee-list/employee-list.component';
import { CustomerListComponent } from './Admin/customer-list/customer-list.component';
import { ItemListComponent } from './Admin/item-list/item-list.component';
import { AddItemComponent } from './Employee/add-item/add-item.component';
import { EmployeeDashboardComponent } from './Employee/employee-dashboard/employee-dashboard.component';
import { EmployeeNavComponent } from './Employee/employee-nav/employee-nav.component';
import { EmployeeHeaderComponent } from './Employee/employee-header/employee-header.component';
import {MatSelectModule} from "@angular/material/select";
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { CartComponent } from './Cart-page/cart/cart.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EmployeeItemComponent } from './Employee/employee-item/employee-item.component';
import { ItemListByEmployeeComponent } from './Employee/item-list-by-employee/item-list-by-employee.component';
import { CustomerListByEmployeeComponent } from './Employee/customer-list-by-employee/customer-list-by-employee.component';

import { Item1Component } from './ProductPage/item1/item1.component';
import { Item2Component } from './ProductPage/item2/item2.component';
import { MyAcountComponent } from './Customer/my-acount/my-acount.component';
import {NgChartsModule} from "ng2-charts";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { CalenderComponent } from './Admin/calender/calender.component';
import {CalendarModule} from "@syncfusion/ej2-angular-calendars";
import { ProfileComponent } from './Admin/profile/profile.component';
import { TimeComponent } from './Admin/time/time.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrdersComponent } from './Admin/orders/orders.component';
import { EmployeeOrderComponent } from './Employee/employee-order/employee-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CustomerLoginComponent,
    NavbarComponent,
    HomePageComponent,
    SearchBarComponent,
    SearchComponent,
    MainBarComponent,
    FeatursComponent,
    AdvertisementComponent,
    ResuntProductComponent,
    NewsletterComponent,
    FeaturedProductComponent,
    FeedbackComponent,
    LoginCustomerComponent,
    ProductPageComponent,
    BreadcrumbComponent,
    ProductComponent,
    EmployeeLoginComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminNavComponent,
    AdminDashboardComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductDisComponent,
    MapComponent,
    ChackOutPageComponent,
    EmployeeListComponent,
    CustomerListComponent,
    ItemListComponent,
    AddItemComponent,
    EmployeeDashboardComponent,
    EmployeeNavComponent,
    EmployeeHeaderComponent,
    AddEmployeeComponent,
    CartComponent,
    EditEmployeeComponent,
    EmployeeItemComponent,
    ItemListByEmployeeComponent,
    CustomerListByEmployeeComponent,
    Item1Component,
    Item2Component,
    MyAcountComponent,
    CalenderComponent,
    ProfileComponent,
    TimeComponent,
    AboutUsComponent,
    OrdersComponent,
    EmployeeOrderComponent,
    OrderDetailsComponent,
    EditItemComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        NgxPaginationModule,
        MatDialogModule,
        Ng2SearchPipeModule,
        MatFormFieldModule,
        MatInputModule,
        CdkListboxModule,
        RouterModule,
        CarouselModule,
        CarouselsModule,
        MatSelectModule,
        NgChartsModule,
        BrowserModule,
        MatDatepickerModule,
        CalendarModule

    ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule{ }

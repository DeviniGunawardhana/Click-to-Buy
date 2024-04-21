import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LatLng} from "leaflet";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrdersModule {
  id!:number
  addressLanLat?: LatLng

}

import {LatLng} from "leaflet";

export class Orders{
    id!:number
    addressLanLat?: LatLng
    orderId!:number
    customerId!:number
    employeeId!:number
    date!:string
    total!:number
    boolean!:string
}
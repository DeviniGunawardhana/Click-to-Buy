import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        'https://www.paintelephant.com/wp-content/uploads/2021/10/hand-craft-made-in-sri-lanka.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.squarespace-cdn.com/content/v1/5c33a7c7f793921b87c3ac8c/1547588056033-VNX53V7R0F49IDIT4F9K/MB_2016_03.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://www.wedoadz.com/wp-content/uploads/classified-listing/2021/05/183320280_3929664227087468_1640721730425233550_n.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://res.cloudinary.com/simplotel/image/upload/x_0,y_83,w_1920,h_1079,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/clarks-avadh-lucknow/Zarbuland_Work',
      imageAlt: 'person2',
    },
  ]



}

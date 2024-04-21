import {Component, Input, OnInit} from '@angular/core';

interface  carouselImages{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImages[]=[]
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlider=false;
  @Input() sliderInterval = 3000
  selectIndex = 0


  ngOnInit(): void {
    if(this.autoSlider){
      this.autoSlideImages();
    }
  }
// change slider in every 3 second
  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.sliderInterval);
  }

//set index of image on dot / indicator click
  selectImage(index:number): void{
    this.selectIndex= index;
  }

  onPrevClick():void{
    if(this.selectIndex === 0){
      this.selectIndex = this.images.length -1 ;

    }else {
      this.selectIndex--;
    }
  }

  onNextClick():void{
    if(this.selectIndex === this.images.length - 1){
      this.selectIndex = 0;

    }else {
      this.selectIndex++;
    }
  }

}

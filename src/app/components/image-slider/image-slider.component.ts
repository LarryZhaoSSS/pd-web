import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
export interface ImageSlider{
  imgUrl: string;
  link: string;
  caption:string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = []
  @ViewChild('imageSlider',{static:true}) imgSlider:ElementRef
  constructor() { }

  ngOnInit() {
    console.log('ng-init')
    console.log(this.imgSlider)
  }

}

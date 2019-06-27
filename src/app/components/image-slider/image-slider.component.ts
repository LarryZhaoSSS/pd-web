import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core'

export interface ImageSlider {
  imgUrl: string
  link: string
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = []
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef
  selectedIndex=0
  intervalId
  constructor(private rd2: Renderer2) {}

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider)
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.intervalId=setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ((this.getIndex(++this.selectedIndex)) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      )
    }, this.intervalBySeconds * 1000)
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId)
  }
  getIndex(idx:number):number {
    return idx >=0 ? idx % this.sliders.length: this.sliders.length-Math.abs(idx)
  }
  handleScroll(ev) {
    const ratio =
      (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth
    this.selectedIndex = Math.round(ratio)
  }
}

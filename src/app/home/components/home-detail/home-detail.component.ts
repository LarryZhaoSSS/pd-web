import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service:HomeService, private cd: ChangeDetectorRef) {}
  selectedTabLink;
  imageSliders: ImageSlider[] = [
  
  ];
  channels: Channel[] = [
    
  ];
  ngOnInit() {
    this.service.getBanners().subscribe(sliders=>{
      this.imageSliders = sliders
      this.cd.markForCheck()
    })

    this.service.getChannels().subscribe(channels=>{
      this.channels = channels
            this.cd.markForCheck()

    })
    this.route.paramMap.subscribe(params => {
      console.log('路径参数: ', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck()
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
  }
}

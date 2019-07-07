import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { ImageSlider, Channel } from 'src/app/shared/components'
import { ActivatedRoute } from '@angular/router'
import { HomeService } from '../../services/home.service'
import { filter, map, switchMap } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs'
import { Ad } from 'src/app/shared/domain'

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}
  selectedTabLink$: Observable<string>
  imageSliders$: Observable<ImageSlider[]>
  channels$: Observable<Channel[]>
  sub: Subscription
  ad$: Observable<Ad>
  ngOnInit() {
    this.imageSliders$ = this.service.getBanners()
    this.channels$ = this.service.getChannels()
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    })
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe()
  }
}

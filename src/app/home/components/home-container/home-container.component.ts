import { Component, OnInit } from '@angular/core'
import { TopMenu, ImageSlider } from 'src/app/shared/components'
import { Router } from '@angular/router'
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router, private service: HomeService) {}
  topMenus: TopMenu[] = []

  ngOnInit(): void {
    this.topMenus = this.service.getTabs()
    // this.imageSliders = this.service.imageSliders
  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link])
  }
}

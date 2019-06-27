import { Component } from '@angular/core'
import { TopMenu, ImageSlider } from './components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pd-web-App'
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ]
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://i.loli.net/2019/06/27/5d13979033ec744087.jpeg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://i.loli.net/2019/06/27/5d1398935f9e976551.jpg',
      link: '',
      caption: ''
    },
  ]
  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu)
  }
}

import { Component } from '@angular/core'
import { TabItem } from './shared/domain/index'
import { Observable } from 'rxjs'
import { Router, NavigationEnd } from '@angular/router'
import { map, filter } from 'rxjs/operators'
import { DialogService } from './dialog/services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex$: Observable<number>
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link])
  }
  constructor(private router: Router, private dialogService:DialogService) {}
  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/')
        return arr.length > 1 ? arr[1] : 'home'
      }),
      map(path=>this.getSelectedIndex(path))
    )
  }
  getSelectedIndex(tab: string) {
    return tab === 'recommend'
      ? 1
      : tab === 'category'
      ? 2
      : tab === 'chat'
      ? 3
      : tab === 'my'
      ? 4
      : 0
  }
<<<<<<< HEAD
  removeDialog() {
    this.dialogService.close()
  }
=======
  removeDialog() {}
>>>>>>> 572570600fa1c5ce2c7031beaf1d975ecd5e8735
}

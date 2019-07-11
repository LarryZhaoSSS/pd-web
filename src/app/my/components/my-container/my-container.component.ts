import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../domain';
import { MyService } from '../../services/my.service';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements OnInit {
  profile$: Observable<Profile>
  constructor(private service: MyService) { }

  ngOnInit() {
    this.profile$ = this.service.getProfile()
  }

}

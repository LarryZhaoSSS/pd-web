import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {
  constructor() {}
  title = ''
  startDate = new Date(2019,6,1)
  futureDate = new Date(2019,6,2)
  ngOnInit() {}
  handleClick() {}
}

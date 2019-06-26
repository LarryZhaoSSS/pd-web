import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export interface TopMenu {
  title: string,
  link?: string
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [
    
  ];
  @Output() tabSelected = new EventEmitter();
  handleSelection(index:number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}

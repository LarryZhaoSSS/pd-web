import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {
  private _username=''
  constructor() { }

  ngOnInit() {
  }
  public get username():string{
    return this._username
  }
  public set username(value:string) {
    this._username = value
  }
}

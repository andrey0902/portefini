import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
  @Input() listMenu: any;
  constructor() { }

  ngOnInit() {
  }

}

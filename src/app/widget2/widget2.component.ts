import { Component, OnInit } from '@angular/core';
import { GridStack } from 'gridstack';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss'],
})
export class Widget2Component implements OnInit {
  grid: any;

  constructor() {}

  ngOnInit(): void {
    this.grid = GridStack.init();
  }
}

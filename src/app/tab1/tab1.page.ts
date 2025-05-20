import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  myDate = new Date();
  myNumber = 3.1475;
  myMoney = 225.258;
  myText = 'Hello Olena!!!!';
  constructor() {}
}

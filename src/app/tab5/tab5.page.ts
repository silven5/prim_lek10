import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  toggle: false;
  constructor() { }

  ngOnInit() {
  }
  update(event: any) {
    this.toggle = event.detail.checked;
  }
}

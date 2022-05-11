import { Component, ViewChild } from '@angular/core';
import { Message } from './stringarray/string-array/message';
import { StringArrayComponent } from './stringarray/string-array/string-array.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  message: Message=new Message([]);
  constructor() { }
  //Метод для отримання даних з дочірньої форми
  newMessage(event)
  {
    this.message = event;
    console.log(this.message);
  }
  X(x: number)
  {
    return x;
  }

}

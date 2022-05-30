import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval,of,range } from 'rxjs';
import { filter, map,tap,take } from 'rxjs/operators';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  //!Приклад1
  message$: Observable<string>;
   //!Приклад1
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  constructor()
  { 
     //!Приклад1
    this.message$ = this.getResendObservable();
  }
   //!Приклад1
resend() {
    this.message$ = this.getResendObservable();
}
 //!Приклад1
  private getResendObservable() {
  //Кожні 500мс.
    return interval(500).pipe(
      map(i => this.messages[i]),
      //*Метод take() приймає як аргумент число - кількість подій потоку, 
      //*які потрібно повернути з моменту старту потоку.
      take(this.messages.length)
    );
  }
  ngOnInit() {
  }
  
}

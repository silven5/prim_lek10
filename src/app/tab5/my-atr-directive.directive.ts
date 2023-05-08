import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyAtrDirective]'
})
export class MyAtrDirectiveDirective {
  constructor(myElement: ElementRef, myRenderer: Renderer2) {
    myRenderer.setStyle(myElement.nativeElement, 'box-shadow', '2px 2px 12px #ccc');
    myRenderer.setStyle(myElement.nativeElement, 'padding', '10px 20px');
  }

}

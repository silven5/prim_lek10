import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMyAtrDirectiveActive]',
})
export class MyAtrDirectiveActiveDirective {
  // Вхідні параметри
  @Input() selectedSize = '18px';
  @Input() defaultSize = '16px';

  private fontSize: string;
  constructor(private el: ElementRef, private myRenderer: Renderer2) {}
  // Змінюємо поведінку при наведені миші
  @HostListener('mouseenter') onMouseIn() {
    this.setSpan('2px 2px 12px #aaa', '10px 20px', 'red');
    this.fontSize = this.selectedSize;
  }
  // Змінюємо поведінку при прибиранні миші
  @HostListener('mouseleave') onMouseOut() {
    this.setSpan('0px 0px 0px #ccc', '0px 0px', 'black');
    this.fontSize = this.defaultSize;
  }
  // Визначаємо стилі
  setSpan(s1: string, s2: string, s3: string) {
    this.myRenderer.setStyle(this.el.nativeElement, 'box-shadow', s1);
    this.myRenderer.setStyle(this.el.nativeElement, 'padding', s2);
    this.myRenderer.setStyle(this.el.nativeElement, 'color', s3);
  }
  // Визначаємо курсор
  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }
  // визначаємо колір
  @HostBinding('style.color') get getColor() {
    return ' #1b2735';
  }
  // розмір шрифта
  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize;
  }
}

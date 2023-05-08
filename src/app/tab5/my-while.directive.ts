import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyWhile]'
})
export class MyWhileDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appMyWhile(cond: boolean) {
    this.viewContainer.clear();
    if (!cond) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        hello: 'Start'
      });
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        hello: 'End'
      });
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyAtrDirectiveDirective } from './my-atr-directive.directive';
import { MyAtrDirectiveActiveDirective } from './my-atr-directive-active.directive';
import { MyWhileDirective } from './my-while.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule
  ],
  declarations: [Tab5Page, MyHeaderComponent, MyAtrDirectiveDirective, MyAtrDirectiveActiveDirective, MyWhileDirective]
})
export class Tab5PageModule { }

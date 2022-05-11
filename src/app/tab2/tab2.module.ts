import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { FormatPipe } from './format.pipe';
import { StringArrayComponent } from './stringarray/string-array/string-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagePipe } from './stringarray/message.pipe';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,ReactiveFormsModule
  ],
  declarations: [Tab2Page, FormatPipe,StringArrayComponent, MessagePipe]
})
export class Tab2PageModule {}

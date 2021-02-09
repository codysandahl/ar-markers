import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArDemoPageRoutingModule } from './ar-demo-routing.module';

import { ArDemoPage } from './ar-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArDemoPageRoutingModule
  ],
  declarations: [ArDemoPage]
})
export class ArDemoPageModule {}

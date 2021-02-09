import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArTrackingAnimPageRoutingModule } from './ar-tracking-anim-routing.module';

import { ArTrackingAnimPage } from './ar-tracking-anim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArTrackingAnimPageRoutingModule
  ],
  declarations: [ArTrackingAnimPage]
})
export class ArTrackingAnimPageModule {}

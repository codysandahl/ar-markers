import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArMultipleMarkersPageRoutingModule } from './ar-multiple-markers-routing.module';

import { ArMultipleMarkersPage } from './ar-multiple-markers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArMultipleMarkersPageRoutingModule
  ],
  declarations: [ArMultipleMarkersPage]
})
export class ArMultipleMarkersPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArCustomModelsPageRoutingModule } from './ar-custom-models-routing.module';

import { ArCustomModelsPage } from './ar-custom-models.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArCustomModelsPageRoutingModule
  ],
  declarations: [ArCustomModelsPage]
})
export class ArCustomModelsPageModule {}

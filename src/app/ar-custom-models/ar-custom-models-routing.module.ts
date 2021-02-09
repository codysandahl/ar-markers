import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArCustomModelsPage } from './ar-custom-models.page';

const routes: Routes = [
  {
    path: '',
    component: ArCustomModelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArCustomModelsPageRoutingModule {}

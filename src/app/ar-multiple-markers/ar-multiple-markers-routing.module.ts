import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArMultipleMarkersPage } from './ar-multiple-markers.page';

const routes: Routes = [
  {
    path: '',
    component: ArMultipleMarkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArMultipleMarkersPageRoutingModule {}

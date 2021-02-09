import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArTrackingAnimPage } from './ar-tracking-anim.page';

const routes: Routes = [
  {
    path: '',
    component: ArTrackingAnimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArTrackingAnimPageRoutingModule {}

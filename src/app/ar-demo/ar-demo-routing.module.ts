import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArDemoPage } from './ar-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ArDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArDemoPageRoutingModule {}

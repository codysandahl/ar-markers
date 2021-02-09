import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ar-demo',
        loadChildren: () => import('../ar-demo/ar-demo.module').then(m => m.ArDemoPageModule)
      },
      {
        path: 'ar-multiple-markers',
        loadChildren: () => import('../ar-multiple-markers/ar-multiple-markers.module').then(m => m.ArMultipleMarkersPageModule)
      },
      {
        path: 'ar-custom-models',
        loadChildren: () => import('../ar-custom-models/ar-custom-models.module').then(m => m.ArCustomModelsPageModule)
      },
      {
        path: 'ar-tracking-anim',
        loadChildren: () => import('../ar-tracking-anim/ar-tracking-anim-routing.module').then(m => m.ArTrackingAnimPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ar-demo',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ar-demo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ar-demo',
    loadChildren: () => import('./ar-demo/ar-demo.module').then( m => m.ArDemoPageModule)
  },
  {
    path: 'ar-multiple-markers',
    loadChildren: () => import('./ar-multiple-markers/ar-multiple-markers.module').then( m => m.ArMultipleMarkersPageModule)
  },
  {
    path: 'ar-custom-models',
    loadChildren: () => import('./ar-custom-models/ar-custom-models.module').then( m => m.ArCustomModelsPageModule)
  },
  {
    path: 'ar-tracking-anim',
    loadChildren: () => import('./ar-tracking-anim/ar-tracking-anim.module').then( m => m.ArTrackingAnimPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

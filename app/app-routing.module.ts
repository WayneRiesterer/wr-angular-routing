import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const ROUTES: Routes = [
  { path: '', loadChildren: './site/site.module#SiteModule' },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    ROUTES, 
    { preloadingStrategy: PreloadAllModules })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
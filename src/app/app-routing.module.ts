import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'terms', loadChildren: '../pages/terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('../pages/login/login.module').then( m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupModule)},
  { path: 'terms', loadChildren: '../pages/terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule' },
  { path: 'main', loadChildren: '../pages/main/main.module#MainPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

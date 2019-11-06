import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/workout',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'progress',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./progress/progress.module').then(m => m.ProgressPageModule)
          }
        ]
      },
      {
        path: 'workout',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./workout/workout.module').then(m => m.WorkoutPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}

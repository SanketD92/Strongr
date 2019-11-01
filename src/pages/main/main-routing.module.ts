import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'progress',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../main/progress/progress.module').then(m => m.ProgressPageModule)
          }
        ]
      },
      {
        path: 'workout',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../main/workout/workout.module').then(m => m.WorkoutPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../main/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '../main/workout/workout',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../main/workout/workout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}

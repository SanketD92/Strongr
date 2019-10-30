import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestComponent } from '../pages/rest/rest.component';
import { WorkoutComponent } from '../pages/workout/workout.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ProgressComponent } from '../pages/progress/progress.component';

@NgModule({
   declarations: [
      AppComponent,
      RestComponent,
      WorkoutComponent,
      SettingsComponent,
      ProgressComponent
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule
   ],
   providers: [
      StatusBar,
      SplashScreen
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

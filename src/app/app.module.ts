import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestComponent } from '../pages/rest/rest.component';

@NgModule({
   declarations: [
      AppComponent,
      RestComponent,
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

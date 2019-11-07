import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {environment} from '../environments/environment';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestComponent } from './rest/rest.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
   declarations: [
      AppComponent,
      RestComponent,
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      FirebaseUIModule.forRoot(firebaseUiAuthConfig),
      IonicStorageModule.forRoot(),
      HttpClientModule
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

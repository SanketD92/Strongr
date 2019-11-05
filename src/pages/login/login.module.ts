import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //AngularFireAuth,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { 
  /*
  constructor(public afAuth: AngularFireAuth) {}

  signIn() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
  */
}

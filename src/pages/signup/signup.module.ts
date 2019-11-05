import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent
      }
    ])
  ],
  declarations: [SignupComponent]
})
export class SignupModule { 
  constructor(public afAuth: AngularFireAuth) {}

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}

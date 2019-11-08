import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username;
  Password;
  credentials = {
    email: this.Username,
    pw: this.Password
  }
  constructor(private router: Router, private toastCtrl: ToastController, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  async signIn() {
    try{
      this.credentials.email = this.Username;
      this.credentials.pw = this.Password;

      // Check if email exists, if not redirect to signup [TODO]

      // Exception if wrong password, validation needed for password and appropriate message [TODO]
      var user = await this.afAuth.auth.signInWithEmailAndPassword(this.Username, this.Password);
      
      if (!user) {
        this.showToast('Username or Password was wrong.');
        this.router.navigate(["/signup"]);
      }
      else{
        this.router.navigate(["/main"]);
      }
    }
    catch(e){
      console.log(e);
      this.showToast('Username or Password was wrong.');
      this.router.navigate(["/signup"]);
    }    
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username;
  Password;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  
  async signIn() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(this.Username, this.Password);
    console.log(user);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  async signIn() {
    try{
      this.credentials.email = this.Username;
      this.credentials.pw = this.Password;
      var user = await this.afAuth.auth.signInWithEmailAndPassword(this.Username, this.Password);
      
      console.log(user);
      // Normally make a POST request to your APi with your login credentials
      if (!user) {
        console.log("Login Failed");
        this.router.navigate(["/signup"]);
      }
      else{
        this.router.navigate(["/main"]);
      }
    }
    catch(e){
      console.log(e);
      this.router.navigate(["/signup"]);
    }
    
  }
}

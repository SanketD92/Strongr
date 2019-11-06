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
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  
  async signIn() {
    try{
      const user = await this.afAuth.auth.signInWithEmailAndPassword(this.Username, this.Password);
      console.log(user);
    }
    catch{
      this.router.navigate(["/signup"]);
    }
    
  }
}

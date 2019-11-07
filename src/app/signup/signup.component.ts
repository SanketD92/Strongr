import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Username;
  Password;
  constructor(public afAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit() {
  }

  signUp() {
      this.afAuth.auth.createUserWithEmailAndPassword(this.Username,this.Password).then(() => {
      this.router.navigate(["/main"]);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  
  async signIn() {
    try{
      this.credentials.email = this.Username;
      this.credentials.pw = this.Password;
      (await this.auth.login(this.credentials)).subscribe(async res => {
        if (res) {
          this.router.navigate(["/main"]);
        }
        else{
          console.log("Failed");
        }
      })
    }
    catch{
      this.router.navigate(["/signup"]);
    }
    
  }
}

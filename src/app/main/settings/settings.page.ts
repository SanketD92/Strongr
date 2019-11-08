import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireModule, FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit{
  

  constructor(public afAuth: AngularFireAuth, private router: Router, private fa: FirebaseApp) {}

  ngOnInit() {
  }
  
  saveChanges(){
    
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { UserSettings, SettingsService } from 'src/app/services/settings.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit{
  
  GymAccess;

  currentSettings: UserSettings;
  
  constructor(public afAuth: AngularFireAuth, private router: Router, 
    private toastCtrl: ToastController, private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getUserSettings(this.afAuth.auth.currentUser.email).subscribe(setting => {
      this.currentSettings = setting,
      this.GymAccess = this.currentSettings.GymAccess
    });
  }

  // TODO - On navigate away, auto-save settings. Else it appears settings are saved without hitting save

  saveChanges(){
    this.currentSettings = {
      GymAccess: this.GymAccess,
      Username: "SampleUsername",
      BodyShape: 2,
      BodyType: 1, // Could be a selection - like Athletic, Skinny etc. to further determine body fat, muscle density
      Goal: 1,
      Weight: 75,
      WeightUnits: 1,
      Height: 5,
      HeightUnits: 1
    }
    
    this.settingsService.setUserSettings(this.afAuth.auth.currentUser.email, this.currentSettings).then(() => {
      this.showToast('Settings added');
    }, err => {
      this.showToast('There was a problem adding your settings. Please try later');
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
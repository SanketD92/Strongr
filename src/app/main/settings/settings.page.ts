import { Component, OnInit } from '@angular/core';
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
  
  tgl;
  currentSettings: UserSettings;
  
  constructor(public afAuth: AngularFireAuth, private router: Router, 
    private toastCtrl: ToastController, private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getUserSettings(this.afAuth.auth.currentUser.email).subscribe(setting => {
      this.currentSettings = setting,
      this.tgl = setting.toggle
    });
  }
  
  saveChanges(){
    this.currentSettings = {
      toggle: this.tgl
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

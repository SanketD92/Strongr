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
  currentSettings: UserSettings = {
    toggle: this.tgl
  };
  
  constructor(public afAuth: AngularFireAuth, private router: Router, 
    private toastCtrl: ToastController, private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getUserSettings('DKBAo3gs6Za4QQ8nOqBv').subscribe(setting => {
      this.currentSettings = setting
    });
    this.tgl = this.currentSettings.toggle;
  }
  
  saveChanges(){
    this.currentSettings.toggle = this.tgl;
    
    this.settingsService.addUserSettings(this.afAuth.auth.currentUser.email, this.currentSettings).then(() => {
      this.showToast('Settings added');
    }, err => {
      this.showToast('There was a problem adding your settings :(');
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

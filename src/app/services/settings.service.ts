import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface UserSettings {
  toggle: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService { 
  private settings: Observable<UserSettings[]>;
  private settingsCollection: AngularFirestoreCollection<UserSettings>;
 
  constructor(private afs: AngularFirestore) {
    this.settingsCollection = this.afs.collection<UserSettings>('UserConfig');
    this.settings = this.settingsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUserSettings(id: string): Observable<UserSettings> {
    return this.settingsCollection.doc<UserSettings>(id).valueChanges().pipe(
      take(1),
      map(userSettings => {
        //userSettings.id = id;
        return userSettings
      })
    );
  }

  addUserSettings(id: string, userSettings: UserSettings): Promise<void> {
    return this.settingsCollection.doc(id).set(userSettings);
    //return this.settingsCollection.add(userSettings);
  }
 
  updateUserSettings(id: string, userSettings: UserSettings): Promise<void> {
    return this.settingsCollection.doc(id).update({ toggle: userSettings.toggle });
  }

}

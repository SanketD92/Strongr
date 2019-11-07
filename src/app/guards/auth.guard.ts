import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router,private afAuth: AngularFireAuth, private alertCtrl: AlertController) { }
 
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.afAuth.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access that page.',
            buttons: ['OK']
          }).then(alert => alert.present());
 
          this.router.navigateByUrl('/');
          return false;
        } 
        else {
          console.log(user);
          return true;
        }
      })
    )
  }
}
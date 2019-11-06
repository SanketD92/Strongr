import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss']
})
export class WorkoutPage {

  constructor(public afAuth: AngularFireAuth) {}

}

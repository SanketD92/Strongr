import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController, Platform } from '@ionic/angular';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss']
})
export class WorkoutPage {

  slides: Slide[];
  sessionWorkout: any[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public menu: MenuController, public platform: Platform) {

    // Fill up sessionWorkout using its own service

    //this.sessionWorkout.forEach(element => {
      // Add to slides automatically
    //});


    this.slides = [
      {
        title: "Slide 1",
        description: "Slide 1 desc",
        image: 'assets/test.gif',
      },
      {
        title: "Slide 2",
        description: "Slide 2 desc",
        image: 'assets/test.gif',
      },
      {
        title: "Slide 3",
        description: "Slide 3 desc",
        image: 'assets/test.gif',
      }
    ];
  }
}

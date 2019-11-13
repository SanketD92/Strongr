import { UserWorkout } from './../../services/workout.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, MenuController, Platform, ToastController } from '@ionic/angular';
import { WorkoutService } from 'src/app/services/workout.service';

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
export class WorkoutPage implements OnInit {

  slides: Slide[];
  sessionWorkout: any[];
  showSkip = true;
  dir: string = 'ltr';
  todaysWorkout: UserWorkout;

  
  ngOnInit() {
    this.workoutService.getWorkoutSession(this.afAuth.auth.currentUser.email).subscribe(workoutHistory => {
      this.todaysWorkout = workoutHistory/*,
      this.todaysWorkout.LastWorkout = workoutHistory.NextWorkout,
      this.todaysWorkout.SessionComplete = false,
      // TODO - Create workout list then assign this by last workout priority
      this.todaysWorkout.NextWorkout = "asd",
      // TODO - This changes by using app repetition / user setting
      this.todaysWorkout.Level = 1,
      this.todaysWorkout.RepIntensity = 1,
      this.todaysWorkout.WeightIntensity = 1
      */
    });
  }

  onReview(){
    // TODO - New window to ask for overall difficulty of the session

    this.todaysWorkout = {
      // TODO - Compute last workout priority list
      // TODO - Compute app repitition to change user setting
      LastWorkout: "string",
      NextWorkout: "string",
      RepIntensity: 1,
      WeightIntensity: 1,
      SessionComplete: true,
      Level: 1
    }
    
    this.workoutService.setWorkoutSession(this.afAuth.auth.currentUser.email, this.todaysWorkout).then(() => {
      this.showToast('Workout History added');
    }, err => {
      this.showToast('There was a problem saving your workout history. Please try later');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  constructor(public afAuth: AngularFireAuth, private workoutService: WorkoutService, private toastCtrl: ToastController,
    public navCtrl: NavController, public menu: MenuController, public platform: Platform) {

    //this.sessionWorkout.forEach(element => {
      // TODO - Add to slides automatically
    //});


    this.slides = [
      {
        title: "Slide 1",
        description: "Slide 1 desc",
        image: 'assets/Back/dumbbellrow.gif',
      },
      {
        title: "Slide 2",
        description: "Slide 2 desc",
        image: 'assets/Back/latpulldown.gif',
      },
      {
        title: "Slide 3",
        description: "Slide 3 desc",
        image: 'assets/Back/pullup.gif',
      }
    ];
  }
}

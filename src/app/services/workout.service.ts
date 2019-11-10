import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface UserWorkout {
  LastWorkout: string,
  NextWorkout: string,
  RepIntensity: number,
  WeightIntensity: number,
  SessionComplete: boolean,
  Level: number
}

@Injectable({
  providedIn: 'root'
})

export class WorkoutService { 
  private workout: Observable<UserWorkout[]>;
  private workoutCollection: AngularFirestoreCollection<UserWorkout>;
 
  constructor(private afs: AngularFirestore) {
    this.workoutCollection = this.afs.collection<UserWorkout>('UserWorkout');
    this.workout = this.workoutCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  
  getWorkoutSession(id: string): Observable<UserWorkout> {
    return this.workoutCollection.doc<UserWorkout>(id).valueChanges().pipe(
      take(1),
      map(userWorkout => {
        return userWorkout
      })
    );
  }

  setWorkoutSession(id: string, userWorkout: UserWorkout): Promise<void> {
    return this.workoutCollection.doc(id).set(userWorkout);
  }
}

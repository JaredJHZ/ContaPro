import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  constructor(public afAuth: AngularFireAuth) { 

  }

  public login() {
    return new Promise( (resolve,reject) => {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        .then(
          (user) => {
            this.user = user;
            resolve(user);
          }
        );
    });
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}

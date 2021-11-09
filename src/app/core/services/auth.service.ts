import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ReplaySubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  loading = false;
  isLoggedIn = false;
  replaySubject$ = new ReplaySubject();

  constructor( public firebaseAuth: AngularFireAuth) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.replaySubject$.next(this.isLoggedIn);
    })
  }

  async signup(firstName: string, email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user.updateProfile({
        displayName: firstName
      })
      console.log(res);
      
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.replaySubject$.next(this.isLoggedIn);
    })
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.replaySubject$.next(this.isLoggedIn);
  }
}
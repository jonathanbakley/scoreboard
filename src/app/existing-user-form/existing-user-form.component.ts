import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-existing-user-form',
  templateUrl: './existing-user-form.component.html',
  styleUrls: ['./existing-user-form.component.css'],
  providers: [AngularFireAuth]
})
export class ExistingUserFormComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  login(email:string, password:string) {
    console.log(email);
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      // ...
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}

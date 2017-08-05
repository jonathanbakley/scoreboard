import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
  providers: [AngularFireAuth]
})
export class NewUserFormComponent implements OnInit {

   verifiedEmail: string;
   verifiedPassword: string;
   enteredEmail: string;
   enteredPassword: string;
   user: Observable<firebase.User>;

   values = '';

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

  ngOnInit() {
  }

  createUser(email: string, password: string){
    this.verifiedEmail = this.enteredEmail;
    this.verifiedPassword = this.enteredPassword;
    //console.log(email);
    //console.log(password);
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
    });
    //Add user info to chart
  }

    logout() {
      this.afAuth.auth.signOut();
    }
}

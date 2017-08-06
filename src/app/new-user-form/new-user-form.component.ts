import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
   users: FirebaseListObservable<any[]>;
   values = '';
   currentUser: any;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.users = af.list('/users', {
      query: {
        limitToLast: 50
      }
    });
   }

  ngOnInit() {
  }

  createUser(email: string, password: string, password2: string, username: string){
    this.verifiedEmail = this.enteredEmail;
    this.verifiedPassword = this.enteredPassword;
    console.log(email + password + password2 + username);
    console.log("user Created");
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
      var errorMessage = error.message;
    });
    //push users info to database
    this.users.push({ Email: email, Username: username, Wins: 0, Loses: 0, Ties: 0 });
  }

  checkUser(){
    this.currentUser = firebase.auth().currentUser;

    if (this.currentUser != null) {
      console.log(this.currentUser.displayName);
      console.log(this.currentUser.email);
    } else {
      console.log("NO USER LOGGED IN");
    }
  }

}

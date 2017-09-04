import { Component, OnInit, Input } from '@angular/core';
import { User } from '../new-user-form/user.model';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main-table',
  inputs: ['usersFirebase'],
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})

//class userStatistics {
//  public email: string;
//  public username: string;
//  public wins: number;
//  public loses: number;
//  public ties: number; 
//}

export class MainTableComponent implements OnInit {
  //@Input() users: FirebaseListObservable<any[]>;

  constructor() {
    //this.users = [
    //  { email: 'jbakley@gmail.com', username: 'jbakley',password: 'password', wins: 1, ties: 2, loses: 3},
      //new User('blake@gmail.com', 'Blake','password',1,2,3 )
    //]
  }

  ngOnInit() {
  }

}

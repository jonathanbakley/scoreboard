import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { ExistingUserFormComponent } from './existing-user-form/existing-user-form.component';


    // Initialize Firebase
 export const firebaseConfig = {
    apiKey: "AIzaSyBwNoidBfQJLEv4cAwZU8qDwuuT0sAInvE",
    authDomain: "scoreboard-cb865.firebaseapp.com",
    databaseURL: "https://scoreboard-cb865.firebaseio.com",
    projectId: "scoreboard-cb865",
    storageBucket: "",
    messagingSenderId: "837871405516"
};

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    LoginCardComponent,
    NewUserFormComponent,
    ExistingUserFormComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

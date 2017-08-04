import { Component, OnInit, Input, HostListener, Directive } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  userType: String = "Login";

  constructor() { }

  ngOnInit() {
  }

  changeUserType(input: any){
    console.log(this.userType);
    if(input == 'newUser'){
      this.userType = "Create Account";
    } else if(input == 'existingUser'){
      this.userType = "Login"
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

var count = 1;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  fetchingData(url, finish, cannot) {
  fetch(url)
    .then(response => {return response.json()})
    .then(myJson => {
      console.log(myJson);
      if (myJson.success === true) {
        finish(myJson);
      } else {
        cannot();
      }
    })
  }

  /* Alert to inform user that the username or password is incorrect.
  */
  falseLogin() {
    alert("Username and Password were incorrect");
  }

  /* Sets the local storage variables with username and user type, specified by ID.
   * Parameter: data: The correct username and ID type returned from the server.
  */
  finishLogin(data) {
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem("username", data.username);
    sessionStorage.setItem("id", data.type);
  }
    console.log(sessionStorage.getItem("id"));
    console.log(sessionStorage.getItem("username"));
    this.router.navigateByUrl('/controlpanel');
  }

  /* Attempts to log the user in.
   * Parameter: event: The event generated by Angular is not used.
  */
  loginUser(event) {
    event.preventDefault();

    let falseBind = this.falseLogin.bind(this);
    let finishBind = this.finishLogin.bind(this);
    let url = '/server/login?username=' + this.username;

    this.fetchingData(url, finishBind, falseBind);


  }
}

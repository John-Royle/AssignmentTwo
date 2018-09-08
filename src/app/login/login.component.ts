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

  falseLogin() {
    alert("Username and Password were incorrect");
  }

  finishLogin(data) {
  console.log(data);
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem("username", data.username);
    sessionStorage.setItem("id", data.type);
  }
    console.log(sessionStorage.getItem("id"));
    console.log(sessionStorage.getItem("username"));
    this.router.navigateByUrl('/controlpanel');
  }


  loginUser(event) {
    event.preventDefault();

    let falseBind = this.falseLogin.bind(this);
    let finishBind = this.finishLogin.bind(this);
    let url = '/server/login?username=' + this.username;

    this.fetchingData(url, finishBind, falseBind);


  }
}

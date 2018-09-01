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


  loginUser(event) {
    event.preventDefault();
    if (typeof(Storage) !== "undefined") {

      sessionStorage.setItem("id", count.toString());
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("birthDate", "14/02/80");
      sessionStorage.setItem("age", "34");

    } else {
      console.log("no web storage support");
      alert("No web storage support");
    }

    if (this.username == "u" && (this.password == "p")) {
    sessionStorage.setItem("id", count.toString());
    sessionStorage.setItem("username", this.username);
    sessionStorage.setItem("birthDate", "14/02/80");
    sessionStorage.setItem("age", "34");

    console.log(sessionStorage.getItem("id"));
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("birthDate"));
    console.log(sessionStorage.getItem("age"));

      this.router.navigateByUrl('/chat');
    } else if (this.username == "p" && (this.password == "u")) {

    sessionStorage.setItem("id", "2");
    sessionStorage.setItem("username", "Brown");
    this.router.navigateByUrl('/chat');

     } else {
      alert("Username and Password were incorrect");
    }
    count = count +1;

  }
}

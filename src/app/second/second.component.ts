import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

id = ""
username = ""
birthDate = ""
age = ""

  constructor() {
    this.id = sessionStorage.getItem("id")
    this.username = sessionStorage.getItem("username")
    this.birthDate = sessionStorage.getItem("birthDate")
    this.age = sessionStorage.getItem("age")

   }

  ngOnInit() {
    console.log(sessionStorage.getItem("id"));
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("birthDate"));
    console.log(sessionStorage.getItem("age"));

  }

}

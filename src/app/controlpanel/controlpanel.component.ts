import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
rooms = [];
usernameNewUser:string ='';
passwordNewUser:string ='';
groupNewUser:String = '';
usernameRemoveuser:String = '';



  constructor(private router:Router) {
    router.navigateByUrl('/controlpanel');
  }

  ngOnInit() {

  this.rooms.push("testRoomOne");
  this.rooms.push("testRoomTwo");
  this.rooms.push("testRoomThree");
  this.rooms.push("testRoomFour");

  }

  createNewUser(event) {
    console.log(event);

    let username = this.usernameNewUser
    let password = this.passwordNewUser
    let group = this.groupNewUser

    console.log(username);
    console.log(password);
    console.log(group);

    let url = '/server/register?username=' + username + '&password=' + password + '&group=' + group;
    fetch(url)
      .then(function(response){
        console.log("response fetch");
        return response.json();
      }).then(function(myJson) {
      console.log("Json fetch");
        console.log(JSON.stringify(myJson));
      });
  }

  removeUser($event) {
  console.log("This remove User Log");
    let username = this.usernameRemoveuser;
    console.log(username);

    let url = '/server/delete?username=' + username;

    fetch(url)
      .then(function(response){
        console.log("response fetch");
        return response.json();
      }).then(function(myJson) {
      console.log("Json fetch");
        console.log(JSON.stringify(myJson));
      });

  }

}

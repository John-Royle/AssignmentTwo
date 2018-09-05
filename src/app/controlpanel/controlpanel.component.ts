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
groupnameNewGroup:String = '';
groupnameDeleteGroup:String = '';
usernameMakeGroupAdminOfGroup:String = '';
groupNameAdminOfGroup:String = '';
usernameMakeSuperUser:String = '';
groupAddUserToGroup:String = '';
usernameAddUserToGroup:String = '';
usernameDeleteUserFromGroup:String = '';
deleteAUserFromGroup:String = '';
channelnameAddChannel:String = '';
groupChannelToGroup:String = '';






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
        return response.json();
      }).then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });

  }

  createGroup(event) {
    console.log(event);

    let group = this.groupnameNewGroup
    console.log(group);

    let url = '/server/registerGroup?group=' + group;
    fetch(url)
      .then(function(response){
        console.log("response fetch");
        return response.json();
      }).then(function(myJson) {
      console.log("Json fetch");
        console.log(JSON.stringify(myJson));
      });
  }

  deleteGroup(event) {

    let group = this.groupnameDeleteGroup;
    console.log(group);

    let url = '/server/deleteGroup?group=' + group;

    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });

  }

  makeUserGroupAdminOfGroup(event) {
    let username = this.usernameMakeGroupAdminOfGroup;
    let group = this.groupNameAdminOfGroup;

    let url = '/server/groupAdminOfGroup?username=' + username + '&group=' + group;
    fetch(url)
      .then(function(response){
        console.log("response fetch");
        return response.json();
      }).then(function(myJson) {
      console.log("Json fetch");
        console.log(JSON.stringify(myJson));
      });
  }

  makeUserSuperAdmin(event) {
    let username = this.usernameMakeSuperUser;

    let url = '/server/makeSuper?username=' + username;
    fetch(url)
      .then(function(response){
        console.log("response fetch");
        return response.json();
      }).then(function(myJson) {
      console.log("Json fetch");
        console.log(JSON.stringify(myJson));
      });

  }

  addUserToGroup(event){

  let username = this.usernameAddUserToGroup;
  let group = this.groupAddUserToGroup;

  let url = '/server/addUserToGroup?username=' + username + '&group=' + group;
  fetch(url)
    .then(function(response){
      console.log("response fetch");
      return response.json();
    }).then(function(myJson) {
    console.log("Json fetch");
      console.log(JSON.stringify(myJson));
    });

  }

  deleteUserFromGroupFunc(event) {
  let username = this.usernameDeleteUserFromGroup;
  let group = this.deleteAUserFromGroup;

  let url = '/server/deleteUserFromGroup?username=' + username + '&group=' + group;
  fetch(url)
    .then(function(response){
      console.log("response fetch");
      return response.json();
    }).then(function(myJson) {
    console.log("Json fetch");
      console.log(JSON.stringify(myJson));
    });

  }

  addchannelToGroup($event) {

  let channelname = this.channelnameAddChannel;
  let group = this.groupChannelToGroup;

  let url = '/server/createChannel?channelname=' + channelname + '&group=' + group;
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

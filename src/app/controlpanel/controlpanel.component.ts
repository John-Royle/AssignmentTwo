import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

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
addUserToChannel:String = '';
channelAddUserChannel:String = '';
deleteUserFromChannelName:String = '';
userDeleteFromChannelChannelName:String = '';

userID:Number = 0;

  constructor(private router:Router) {
    router.navigateByUrl('/controlpanel');
  }

  ngOnInit() {

  if (sessionStorage.getItem("id") !== null)
    this.userID = parseInt(sessionStorage.getItem("id"));
  }

  /* Adds a user to the Person object.
   * Parameter: usernameNewUser: The user that I wish to add to the Person object.
   * Parameter: passwordNewUser: The password that I wish to add to the Person object.
   * Parameter: groupNewUser: The group that I wish to add to the Person object.
  */
  createNewUser(event) {
    console.log(event);

    let username = this.usernameNewUser
    let password = this.passwordNewUser
    let group = this.groupNewUser

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

  /* Deletes a user in the Person object.
   * Parameter: usernameRemoveuser: The user that I wish to add to the Person object.
  */
  removeUser($event) {
    let username = this.usernameRemoveuser;

    let url = '/server/delete?username=' + username;

    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });

  }

  /* Adds a group to the GroupClass object.
   * Parameter: groupnameNewGroup: The group name that I wish to add to the GroupClass object.
  */
  createGroup(event) {

    let group = this.groupnameNewGroup

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

  /* Deletes a group in the GroupClass object.
   * Parameter: groupnameDeleteGroup: The group name that I wish to delete from the GroupClass object.
  */
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

  /* Changes the status of a user to Group Admin of a specified group.
   * Parameter: usernameMakeGroupAdminOfGroup: The user that I wish to make Group Admin of a specified group.
   * Parameter: groupNameAdminOfGroup: The group name that I wish the specified user to be Group Admin of.
  */
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

  /* Changes the status of a user to Super Admin.
   * Parameter: usernameMakeSuperUser: The user that I wish to make Super Admin.
  */
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

  /* Adds a specified user to a group.
   * Parameter: usernameAddUserToGroup: The specified user that I wish to add to the group.
   * Parameter: groupnameNewGroup: The group name that I wish to add the specified user to.
  */
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

  /* Deletes a specified user from a group.
   * Parameter: usernameDeleteUserFromGroup: The specified user that I wish to delete from the group.
   * Parameter: deleteAUserFromGroup: The group name that I wish to delete the specified user from.
  */
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

  /* Adds a channel to a specified group.
   * Parameter: channelnameAddChannel: The specified channel that I wish to add to the group.
   * Parameter: groupChannelToGroup: The group name that I wish to add the specified channel to.
  */
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

  /* Adds a specified user to a channel.
   * Parameter: addUserToChannel: The specified user that I wish to add to the channel.
   * Parameter: channelAddUserChannel: The channel name that I wish to add the specified user to.
  */
  addNewUserToChannel($event) {
  let channeluser = this.addUserToChannel;
  let channelname = this.channelAddUserChannel;

  let url = '/server/addUserToChannel?username=' + channeluser + '&channelname=' + channelname;
  fetch(url)
    .then(function(response){
      console.log("response fetch");
      return response.json();
    }).then(function(myJson) {
    console.log("Json fetch");
      console.log(JSON.stringify(myJson));
    });

  }


  /* Deletes a specified user from a channel.
   * Parameter: deleteUserFromChannelName: The specified user that I wish to delete from the channel.
   * Parameter: userDeleteFromChannelChannelName: The channel name that I wish to delete the specified user from.
  */
  deleteUserFromChannel(event) {

  let channeluser = this.deleteUserFromChannelName;
  let channelname = this.userDeleteFromChannelChannelName;

  let url = '/server/deleteUserFromChannel?username=' + channeluser + '&channelname=' + channelname;
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

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selectroom',
  templateUrl: './selectroom.component.html',
  styleUrls: ['./selectroom.component.css']
})
export class SelectroomComponent implements OnInit {
rooms = [];
  constructor(private router:Router) {


  }

  /* Runs an asyncronous fetch to get the list of channels and groups that a specified user can see.
   * Parameter: url: The url to go to.
   * Parameter: set: The function pointer.
  */
  fetchChannels(url, set){
    fetch(url)
      .then(response => {return response.json()})
      .then(myJson => {
        let data = [];
        for (let i = 0; i < myJson.success.groups.length; i++) {
          let group = {"Name": myJson.success.groups[i].GroupName, "Channels":[]};

          for (let j = 0; j < myJson.success.groups[i].channels.length; j++){
            group.Channels.push(myJson.success.groups[i].channels[j]);
          }

          data.push(group);

        }
        set(data);
      })
  }

  /* Sets the groups and channels.
   * Parameter: data: Takes in data from the fetch.
  */
  setChannels(data) {
    for (let i = 0; i < data.length; i++){
      this.rooms.push("Group:");
      this.rooms.push(data[i].Name);
      if (data[i].Channels.length > 0) {
        this.rooms.push("Channels:");
        for (let j = 0; j < data[i].Channels.length; j++) {
          this.rooms.push(data[i].Channels[j]);
        }
      }

    }
  }

  ngOnInit() {


  let set = this.setChannels.bind(this);
  let channeluser = sessionStorage.getItem("username");

  if (channeluser === null) {
    channeluser = "sam";
  }

  let url = '/server/getGroupsAndChannels?username=' + channeluser;

  this.fetchChannels(url, set);


  }

}

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

  hello(url, set){
    fetch(url)
      .then(response => {return response.json()})
      .then(myJson => {
        let data = [];
        console.log(myJson);
        for (let i = 0; i < myJson.success.groups.length; i++) {
          let group = {"Name": myJson.success.groups[i].GroupName, "Channels":[]};

          for (let j = 0; j < myJson.success.groups[i].channels.length; j++){
            group.Channels.push(myJson.success.groups[i].channels[j]);
          }

          data.push(group);

        }
        console.log(data);
        set(data);
      })
  }

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


    //this.router.navigateByUrl('/chat');
  let set = this.setChannels.bind(this);
  let channeluser = sessionStorage.getItem("username");

  if (channeluser === null) {
    channeluser = "sam";
  }



  let url = '/server/getGroupsAndChannels?username=' + channeluser;

  this.hello(url, set);


  }

}

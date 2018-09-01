import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
rooms = [];

  constructor(private router:Router) {
    router.navigateByUrl('/controlpanel');
  }

  ngOnInit() {

  this.rooms.push("testRoomOne");
  this.rooms.push("testRoomTwo");
  this.rooms.push("testRoomThree");
  this.rooms.push("testRoomFour");



  }

}

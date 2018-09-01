import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selectroom',
  templateUrl: './selectroom.component.html',
  styleUrls: ['./selectroom.component.css']
})
export class SelectroomComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

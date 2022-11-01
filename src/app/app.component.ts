import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) { }

  title = 'HospitalFront';
  state = false;
  numberofRoom = "";
  parentFunction(data) {
    this.state = data;
  }

  getNumberOfRoom(roomNum) {
    this.numberofRoom = roomNum;
  }
}

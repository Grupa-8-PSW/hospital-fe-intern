import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalFront';
  state = false;
  numberofRoom = "";
  parentFunction(data) {
    this.state = data;
    console.log(data);
  }

  getNumberOfRoom(roomNum) {
    this.numberofRoom = roomNum;
  }
}

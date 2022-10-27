import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'RoomsByFabric';
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

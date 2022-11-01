import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Output, EventEmitter } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class SignatureComponent implements OnInit {
  canvas: any;

  state = false;


  @Output() newItemEvent = new EventEmitter<boolean>();

  @Output() numberOfStateEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {

    let roomsData = [
      { x: 0, y: 0, roomWidth: 260, roomHeight: 160, roomColor: 'blue', name: 1 },
      { x: 0, y: 338, roomWidth: 220, roomHeight: 140, roomColor: 'red', name: 2 },
      { x: 237, y: 0, roomWidth: 300, roomHeight: 180, roomColor: 'blue', name: 3 },
      { x: 237, y: 338, roomWidth: 200, roomHeight: 100, roomColor: 'red', name: 4 },
    ];


    this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: false
    });

    for (let i = 0; i < roomsData.length; i++) {
      let x = roomsData[i].x;
      let y = roomsData[i].y;
      let w = roomsData[i].roomWidth;
      let h = roomsData[i].roomHeight;
      let rc = roomsData[i].roomColor;
      let name = roomsData[i].name;

      let rectangle = new fabric.Rect({
        width: w,
        height: h,
        fill: '',
        stroke: rc,
        strokeWidth: 3,
        top: x,
        left: y,
        selectable: false,
        hoverCursor: "pointer",

      });

      this.canvas.add(rectangle);

      rectangle.on('mousedown', () => {
        this.state = false;
        this.newItemEvent.emit(this.state);
        if (this.state === false) {
          this.state = true;
          this.newItemEvent.emit(this.state);
          this.numberOfStateEvent.emit(i + 1);
        }
      })

      var text = new fabric.Text("Room" + name, {
        fill: "black",
        fontSize: 20,
        top: x + h / 2.3,
        left: y + w / 2.5
      })

      this.canvas.add(text);

    }
  }
}

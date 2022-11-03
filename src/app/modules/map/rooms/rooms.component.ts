import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Output, EventEmitter } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Room } from '../model/rooms.model';
import { RoomsService } from './roomsService/rooms.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class SignatureComponent implements OnInit {

  roomsData = null;
  canvas: any;
  state = false;
  id = null;

  constructor(private router: Router, private roomsService: RoomsService, private _Activatedroute: ActivatedRoute) { }

  public rooms: Room[] = [];

  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: false
    });

    this.roomsService.getRoomByFloorId(this.id).subscribe(res => {
      this.rooms = res;


      for (let i = 0; i < this.rooms.length; i++) {

        let id = this.rooms[i].id;
        console.log(id);
        let x = this.rooms[i].x;
        let y = this.rooms[i].y;
        let w = this.rooms[i].width;
        let h = this.rooms[i].height;
        let rc = this.rooms[i].color;
        let name = this.rooms[i].name;




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
          if (this.state === false) {
            this.state = true;
            this.roomsData = id;
            console.log(this.roomsData);
          }
        });

        var text = new fabric.Text(name, {
          fill: "black",
          fontSize: 20,
          top: x + h / 2.3,
          left: y + w / 2.5
        });

        this.canvas.add(text);

      }
    })

  }
}

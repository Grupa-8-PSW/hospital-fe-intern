import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Router, RouterLinkActive } from '@angular/router';
import { Room } from '../model/rooms.model';
import { RoomsService } from './roomsService/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from './roomsService/forms.service';
import { Form } from '../model/form.model';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class SignatureComponent implements OnInit {

  whichRoom = null;
  canvas: any;
  state = false;
  id = null;

  constructor(private router: Router, private roomsService: RoomsService, private _Activatedroute: ActivatedRoute, private formsService: FormsService) { }

  public rooms: Room[] = [];
  public forms: Form[] = [];
  public datas = [];

  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: false
    });



    this.roomsService.getRoomByFloorId(this.id).subscribe(res => {
      this.rooms = res;


      for (let i = 0; i < this.rooms.length; i++) {

        let id = this.rooms[i].id;
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
            this.whichRoom = id;
            this.formsService.getForms().subscribe(res => {
              this.forms = res;

              for (let i = 0; i < this.forms.length; i++) {

                let roomId = this.forms[i].roomId;
                let name = this.forms[i].name;
                let desc = this.forms[i].description;
                let sWD = this.forms[i].startHourWorkDay;
                let eWD = this.forms[i].endHourWorkDay;
                let sSat = this.forms[i].startHourSaturday;
                let eSat = this.forms[i].endHourSaturday;
                let sSun = this.forms[i].startHourSunday;
                let eSun = this.forms[i].endHourSunday;


                if (this.whichRoom === roomId) {
                  this.datas[0] = roomId;
                  this.datas[1] = name;
                  this.datas[2] = desc;
                  this.datas[3] = sWD;
                  this.datas[4] = eWD;
                  this.datas[5] = sSat;
                  this.datas[6] = eSat;
                  this.datas[7] = sSun;
                  this.datas[8] = eSun;
                  console.log(this.datas[0]);
                }

              }
            })
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

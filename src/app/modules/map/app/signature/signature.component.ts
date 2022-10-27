import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  canvas: any;

  state = false;
  state2 = false;
  state3 = false;
  state4 = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  @Output() numberOfStateEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.canvas = new fabric.Canvas("canvas", {
      isDrawingMode: false
    });

    var rectangle = new fabric.Rect({
      width: 260,
      height: 160,
      fill: '',
      stroke: 'black',
      strokeWidth: 3,
      top: 0,
      left: 0,
      selectable: false,
      hoverCursor: "pointer"
    });

    var rectangle2 = new fabric.Rect({
      width: 260,
      height: 160,
      fill: 'lightblue',
      stroke: 'black',
      strokeWidth: 3,
      top: 0,
      left: 338,
      selectable: false,
      hoverCursor: "pointer",

    });

    var rectangle3 = new fabric.Rect({
      width: 260,
      height: 160,
      fill: '',
      stroke: 'black',
      strokeWidth: 3,
      top: 237,
      left: 0,
      selectable: false,
      hoverCursor: "pointer"
    });

    var rectangle4 = new fabric.Rect({
      width: 260,
      height: 160,
      fill: '',
      stroke: 'black',
      strokeWidth: 3,
      top: 237,
      left: 338,
      selectable: false,
      hoverCursor: "pointer"
    });

    var text = new fabric.Text('Room 1', {
      fill: "black",
      fontSize: 20,
      top: 70,
      left: 100
    })

    var text2 = new fabric.Text('Room 2', {
      fill: "black",
      fontSize: 20,
      top: 70,
      left: 435
    })

    var text3 = new fabric.Text('Room 3', {
      fill: "black",
      fontSize: 20,
      top: 300,
      left: 100
    })

    var text4 = new fabric.Text('Room 4', {
      fill: "black",
      fontSize: 20,
      top: 300,
      left: 435
    })

    this.canvas.add(text);
    this.canvas.add(text2);
    this.canvas.add(text3);
    this.canvas.add(text4);

    this.canvas.add(rectangle);
    this.canvas.add(rectangle2);
    this.canvas.add(rectangle3);
    this.canvas.add(rectangle4);

    rectangle.on('mousedown', () => {
      this.state = false;
      this.newItemEvent.emit(this.state);
      this.state2 = false;
      this.newItemEvent.emit(this.state2);
      this.state3 = false;
      this.newItemEvent.emit(this.state3);
      this.state4 = false;
      this.newItemEvent.emit(this.state4);
      if (this.state === false) {
        this.state = true;
        this.newItemEvent.emit(this.state);
        this.numberOfStateEvent.emit(1);
      }
    })

    rectangle2.on('mousedown', () => {
      this.state = false;
      this.newItemEvent.emit(this.state);
      this.state2 = false;
      this.newItemEvent.emit(this.state2);
      this.state3 = false;
      this.newItemEvent.emit(this.state3);
      this.state4 = false;
      this.newItemEvent.emit(this.state4);
      if (this.state2 === false) {
        this.state2 = true;
        this.newItemEvent.emit(this.state2);
        this.numberOfStateEvent.emit(2);
      }
    })

    rectangle3.on('mousedown', () => {
      this.state = false;
      this.newItemEvent.emit(this.state);
      this.state2 = false;
      this.newItemEvent.emit(this.state2);
      this.state3 = false;
      this.newItemEvent.emit(this.state3);
      this.state4 = false;
      this.newItemEvent.emit(this.state4);
      if (this.state3 === false) {
        this.state3 = true;
        this.newItemEvent.emit(this.state3);
        this.numberOfStateEvent.emit(3);
      }
    })

    rectangle4.on('mousedown', () => {
      this.state = false;
      this.newItemEvent.emit(this.state);
      this.state2 = false;
      this.newItemEvent.emit(this.state2);
      this.state3 = false;
      this.newItemEvent.emit(this.state3);
      this.state4 = false;
      this.newItemEvent.emit(this.state4);
      if (this.state4 === false) {
        this.state4 = true;
        this.newItemEvent.emit(this.state4);
        this.numberOfStateEvent.emit(4);
      }
    })


  }

  public chooseRoom(id: number) {
    this.router.navigate(['/map']);
  }


}


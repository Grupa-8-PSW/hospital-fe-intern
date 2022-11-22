import { Component, OnInit } from '@angular/core';
import Raphael from 'raphael';
import { FloorsService } from './floorsService/floors.service';
import { Floor } from '../model/floors.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  constructor(private floorsService: FloorsService, private _Activatedroute: ActivatedRoute) { }

  id = null;
  public floors: Floor[] = [];

  ngOnInit(): void {
    let back = { x: 0, y: 0, w: 1000, h: 800, c: 'lightblue' };

    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    /*
    let floors = [
      { x: 100, y: 70, width: 300, height: 100, color: 'white', name: 'floor 3', id: 3 },
      { x: 100, y: 170, width: 300, height: 100, color: 'white', name: 'floor 2', id: 2 },
      { x: 100, y: 270, width: 300, height: 100, color: 'white', name: 'floor 1', id: 1 },
      { x: 100, y: 370, width: 300, height: 100, color: 'white', name: 'ground', id: 0 }
    ];
    */
    //let ground=;


    //let paper = Raphael("paper", 700, 500);
    let paper = Raphael("paper", 500, 500);


    paper.rect(back.x, back.y, back.w, back.h)
      .attr('fill', back.c);
    //paper.rect(ground.x,ground.y,ground.width,ground.height)
    //.attr('fill','white');


    this.floorsService.getFloorByBuildingId(this.id).subscribe(res => {
      this.floors = res;

      for (let i = 0; i < this.floors.length; i++) {
        let x = this.floors[i].x;
        let y = this.floors[i].y;
        let w = this.floors[i].width;
        let h = this.floors[i].height;
        let number = this.floors[i].number;
        let textx = x + (w / 2);
        let texty = y + (h / 2);
        let id = this.floors[i].id;


        paper.rect(x, y, w, h, 2)
          .attr('fill', this.floors[i].color)
          .click(function () {
            if (number != 'ground') {
              location.assign('/map/floor/rooms/' + id);
            }

          })
          .hover(function () {
            this.attr('opacity', 0.8);
          }, function () {
            this.attr('opacity', 1);
          });
        if (number == 'ground') {

        }
        paper.rect(230, 400, 40, 70)
          .attr('fill', 'white');
        if (number != 'ground') {
          paper.text(textx, texty, number)
            .attr('font-size', 20);

        }
      }
    })
  }

}

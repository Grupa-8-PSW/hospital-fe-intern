import { Component, OnInit } from '@angular/core';
import Raphael from 'raphael';
import { Building } from '../model/building.model';
import { BuildingService } from './buildingService/building.service';
import { Room } from '../model/rooms.model';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  public buildings: Building[] = [];

  constructor(private buildingService: BuildingService) { }

  public rooms: Room[] = [];
  value: any;



  ngOnInit(): void {

    this.buildingService.getBuildings().subscribe(res => {
      this.buildings = res;

      for (let i = 0; i < this.buildings.length; i++) {
        let x = this.buildings[i].x;
        let y = this.buildings[i].y;
        let w = this.buildings[i].width;
        let h = this.buildings[i].height;
        let name = this.buildings[i].name;
        let textx = x + (w / 2);
        let texty = y + (h / 2);
        let id = this.buildings[i].id;

        let building = paper.rect(x, y, w, h, 2)
          .attr('fill', this.buildings[i].color)
          .data("id", this.buildings[i].id)
          .click(function () {

            location.assign('/map/floor/' + id);
          })
          .hover(function () {
            this.attr('opacity', 0.8);
          }, function () {
            this.attr('opacity', 1);
          });

        let text = paper.text(textx, texty, name)
          .attr('font-size', 20);
      }
    })


    // this.buildingService.getAllRooms().subscribe(res => {
    //   this.rooms = res;

    //   for (let i = 0; i < this.rooms.length; i++) {
    //     let roomId = this.rooms[i].id;
    //     let roomName = this.rooms[i].name;
    //   }
    // })

    // let buildings = [
    //   { x: 100, y: 100, width: 450, height: 150, color: 'gray', name: 'One' },
    //   { x: 600, y: 100, width: 150, height: 450, color: 'gray', name: 'Too' },
    //   { x: 400, y: 600, width: 400, height: 130, color: 'gray', name: 'Tre' },
    // ];

    let back = { x: 0, y: 0, w: 1000, h: 800, c: 'green' };

    let paper = Raphael("paper", 1000, 800);

    // let background = paper.rect(back.x, back.y, back.w, back.h)
    //   .attr('fill', back.c);

  }

  public searchRooms(name: string): void {
    this.buildingService.searchRooms(name).subscribe(res => {
      this.rooms = res;
    });
  }

  selectedRoom(roomId: number) {
    this.buildingService.getAllRooms().subscribe(res => {
      this.rooms = res;
      this.rooms[roomId].color = "red";
    })
  }

}

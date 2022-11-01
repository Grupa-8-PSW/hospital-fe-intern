import { Component, OnInit } from '@angular/core';
import Raphael from 'raphael';
import { BuildingService } from './buildingService/building.service';


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor(public buildingsService: BuildingService) { }

  buildingsList: any;

  ngOnInit(): void {

    this.buildingsService.getAllBuildings().subscribe(data => {
      this.buildingsList = data;
    })

    //TREBALO BI DA JE TO TO,SAMO TREBA OVO buildingsList dalje koristiti umesto buildings(a) ispod


    let back = { x: 0, y: 0, w: 1000, h: 800, c: 'green' };
    /*
    let buildings = [
      { x: 100, y: 100, width: 450, height: 150, color: 'gray', name: 'One' },
      { x: 600, y: 100, width: 150, height: 450, color: 'gray', name: 'Too' },
      { x: 400, y: 600, width: 400, height: 130, color: 'gray', name: 'Tre' },
    ]; */

    let paper = Raphael("paper", 1000, 800);

    let background = paper.rect(back.x, back.y, back.w, back.h)
      .attr('fill', back.c);

    for (let i = 0; i < this.buildingsList.length; i++) {
      let x = this.buildingsList[i].x;
      let y = this.buildingsList[i].y;
      let w = this.buildingsList[i].width;
      let h = this.buildingsList[i].height;
      let name = this.buildingsList[i].name;
      let textx = x + (w / 2);
      let texty = y + (h / 2);

      let building = paper.rect(x, y, w, h, 2)
        .attr('fill', this.buildingsList[i].color)
        .click(function () {

          location.assign('/map/floor');

        })
        .hover(function () {
          this.attr('opacity', 0.8);
        }, function () {
          this.attr('opacity', 1);
        });

      let text = paper.text(textx, texty, name)
        .attr('font-size', 20);
    }

  }

}

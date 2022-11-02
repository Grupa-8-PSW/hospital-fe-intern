import { Component, OnInit } from '@angular/core';
import Raphael from 'raphael'; 

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let back = {x: 0, y: 0, w:1000, h:800, c:'lightblue'};

    let floors =[
      {x:100, y:70, width:300, height:100, color:'white', name:'floor 3'},
      {x:100, y:170, width:300, height:100, color:'white', name:'floor 2'},
      {x:100, y:270, width:300, height:100,color:'white', name:'floor 1'},
      {x:100, y:370, width:300, height:100,color:'white', name:'ground'}
    ];
    //let ground=;
    

    //let paper = Raphael("paper", 700, 500);
    let paper = Raphael("paper", 500, 500);
    

    paper.rect(back.x, back.y, back.w, back.h)
      .attr('fill', back.c);
    //paper.rect(ground.x,ground.y,ground.width,ground.height)
        //.attr('fill','white');
  

    for (let i = 0; i < floors.length; i++) {
      let x = floors[i].x;
      let y = floors[i].y;
      let w = floors[i].width;
      let h = floors[i].height;
      let name = floors[i].name;
      let textx = x + (w / 2);
      let texty = y + (h / 2);
     
  
      paper.rect(x, y, w, h, 2)
        .attr('fill', floors[i].color)
        .click(function () {
          if(name!='ground'){
          location.assign('/map/floor/rooms');
          }
  
          })
        .hover(function () {
          this.attr('opacity', 0.8);
        }, function () {
          this.attr('opacity', 1);
        });
        if(name=='ground'){
        
        }
        paper.rect(230,400,40,70)
        .attr('fill','white');
        if(name!='ground'){
        paper.text(textx, texty, name)
             .attr('font-size', 20);

        }
      }
  }

}

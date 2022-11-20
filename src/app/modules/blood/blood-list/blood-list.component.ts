import { Component, OnInit } from '@angular/core';
import { BloodService } from '../blood.service';
import Blood from '../model/Blood';
import { BloodType } from '../model/BloodType';
@Component({
  selector: 'app-blood-list',
  templateUrl: './blood-list.component.html',
  styleUrls: ['./blood-list.component.css']
})
export class BloodListComponent implements OnInit {
  bloodList: Blood[] = [];

  constructor(
    private bloodService: BloodService
  ) { }

  ngOnInit(): void {
    this.bloodService.getAll().subscribe({
      next: (data) => {
        this.bloodList = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ConsiliumService } from '../../consilium/consilium.service';
import Consilium from '../../consilium/model/Consilium';

@Component({
  selector: 'app-consiliums',
  templateUrl: './consiliums.component.html',
  styleUrls: ['./consiliums.component.css']
})
export class ConsiliumsComponent implements OnInit {
  consiliums$!: Observable<Consilium[]>;
  pastConsiliums$!: Observable<Consilium[]>;
  futureConsiliums$!: Observable<Consilium[]>;
  pending = false;

  constructor(
    private consiliumService: ConsiliumService
  ) { }


  ngOnInit(): void {
    this.pending = true;

    this.consiliums$ = this.consiliumService.GetAllConsiliums();

    this.pastConsiliums$ = this.consiliums$.pipe(
      map((consiliums) => consiliums.filter(consilium => consilium.to.isBefore()))
    );

    this.futureConsiliums$ = this.consiliums$.pipe(
      map((consiliums) => consiliums.filter(consilium => consilium.to.isAfter()))
    );

    this.pending = false;
  }


}

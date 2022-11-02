import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExaminationService } from '../../core/examination.service';
import {Examination } from '../../hospital/model/examination';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {
  showAddExamination: boolean = false;

  public dataSource = new MatTableDataSource<Examination>();
  public displayedColumns = ['starts', 'duration', 'patientFirstName', 'patientLastName'];
  public examinations: Examination[] = [];




  constructor(private examinationService: ExaminationService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe((params: Params) => {
       this.examinationService.getExaminationsByDate(params['day'], params['month'], params['year']).subscribe(res => {
         this.examinations = res;
         this.dataSource.data = this.examinations;
      })
    });
  }

  addExamination() {
    this.router.navigate(['/examinations/create']);
  }

  public getTime(date:Date) : string {
    const dateObject = new Date(date)
    return dateObject.getHours().toString() + ":" + dateObject.getMinutes().toString();
  }

  public getEndTime(date:Date, duration:number) : string {
    const dateObject = new Date(date)
    var newDateObj = new Date();
    newDateObj.setTime(dateObject.getTime() + (duration * 60 * 1000));
    return newDateObj.getHours().toString() + ":" + newDateObj.getMinutes().toString();
  }
}

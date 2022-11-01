import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  public displayedColumns = ['starts', 'duration', 'patientId'];
  public examinations: Examination[] = [];

  constructor(private examinationService: ExaminationService, private router: Router) { }

  ngOnInit(): void {
   /* this.examinationService.getExaminations().subscribe(res => {
      this.examinations = res;*/
      this.examinations.push(new Examination())
      this.dataSource.data = this.examinations;

//    })
  }

  addExamination() {
    this.router.navigate(['/examinations/create']);
  }

}

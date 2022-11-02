import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ScheduleService } from '../../examination/schedule.service';
import Examination from '../../../model/examination';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {
  showAddExamination: boolean = false;

  public dataSource = new MatTableDataSource<Examination>();
  public displayedColumns = ['starts', 'duration', 'Patient Id', 'edit'];
  public examinations: Examination[] = [];

  constructor(private scheduleService: ScheduleService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe((params: Params) => {
       this.scheduleService.getExaminationsByDate(params['day'], params['month'], params['year']).subscribe(res => {
         this.examinations = res;
         this.dataSource.data = this.examinations;
      })
    });
  }

  addExamination() {
    const date = this.route.snapshot.params['day'];
    const month = this.route.snapshot.params['month'];
    const year = this.route.snapshot.params['year'];
    this.router.navigate([`/examinations/create/${date}/${month}/${year}`]);
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

  public handleEdit(id: number) : void {
    this.router.navigate([`/examinations/edit/${id}`])
  }
}

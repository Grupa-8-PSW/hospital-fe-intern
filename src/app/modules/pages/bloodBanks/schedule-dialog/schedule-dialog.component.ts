import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent implements OnInit {

  public time: any;
  constructor(private DialogRef: MatDialogRef<ScheduleDialogComponent>) { }

  ngOnInit(): void {
  }

  schedule(): void {
    window.alert(this.time);
    this.DialogRef.close();
  } 
}

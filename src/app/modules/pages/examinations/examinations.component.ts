import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ScheduleService } from '../../examination/schedule.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Examination from '../../../model/examination';
import * as moment from 'moment';

@Component({
  selector: 'app-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {
  showAddExamination: boolean = false;
  errorDownloadingReport: string | null = null;
  downloading = false;
  modalRef?: BsModalRef;
  includeReport = false;
  includeSymptoms = false;
  includePrescriptions = false;
  selectedExaminationId: number | null = null;

  public dataSource = new MatTableDataSource<Examination>();
  public displayedColumns = ['starts', 'duration', 'Patient Id', 'edit', 'doExamination'];
  public examinations: Examination[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

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

  public doExamination(id: number) : void {
    this.router.navigate([`/examinations/do`])
    //this.router.navigate([`/examinations/do/${id}`])
  }

  public showReport(): void {
    if (!this.selectedExaminationId) return;

    this.errorDownloadingReport = null;
    this.downloading = true;
    this.scheduleService.downloadReport(this.selectedExaminationId, this.includeReport,
      this.includeSymptoms, this.includePrescriptions).subscribe({
      next: (response) => {
        this.downloading = false;
        console.log(response);
        const blob = response.body as Blob;
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl);
      },
      error: (err) => {
        this.downloading = false;
        console.log(err);
        this.errorDownloadingReport = "Error downloading report.";
      }
    });
    this.modalRef?.hide();
  }

  examinationStarted(date: Date) {
    const now = moment();
    return now.isAfter(date);
  }

  openModal(template: TemplateRef<any>, examinationId: number) {
    this.modalRef = this.modalService.show(template);
    this.selectedExaminationId = examinationId;
  }
}


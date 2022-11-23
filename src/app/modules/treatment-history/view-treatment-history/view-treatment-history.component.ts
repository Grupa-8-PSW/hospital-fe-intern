import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import { TreatmentHistoryService } from '../treatment-history.service';

@Component({
  selector: 'app-view-treatment-history',
  templateUrl: './view-treatment-history.component.html',
  styleUrls: ['./view-treatment-history.component.css']
})
export class ViewTreatmentHistoryComponent implements OnInit {

 // public dataSource = new MatTableDataSource<TreatmentHistory>();
  public treatmentHistory? : TreatmentHistory;
  isActive: boolean = true;
  submitted = false;
  id: number = 0;
  downloading = false;
  errorDownloading: string | null = null;

  constructor(private treatmentHistoryService: TreatmentHistoryService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.treatmentHistoryService.getTreatmentHistoryById(params['id']).subscribe(res => {
        this.treatmentHistory = res;
        this.id = params['id'];
      //   this.dataSource.data = this.treatmentHistory;
      })
    });
  }

  public discharge() : void {
    this.router.navigate([`/treatmentHistory/dischargePatient/${this.id}`])
  }

  public downloadReport(): void {
    this.downloading = true;
    this.errorDownloading = null;
    this.treatmentHistoryService.downloadReport(this.id).subscribe({
      next: (response) => {
        console.log(response);
        const fileName = response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
        const blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName!;
        a.href = URL.createObjectURL(blob);
        a.click();
        this.downloading = false;
      },
      error: (err) => {
        console.log(err);
        this.downloading = false;
        this.errorDownloading = "Error downloading report.";
      }
    })
  }

}

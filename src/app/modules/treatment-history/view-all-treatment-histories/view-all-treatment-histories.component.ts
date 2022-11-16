import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import TreatmentHistory from 'src/app/model/treatmentHistory';
import { TreatmentHistoryService } from '../treatment-history.service';


@Component({
  selector: 'app-view-all-treatment-histories',
  templateUrl: './view-all-treatment-histories.component.html',
  styleUrls: ['./view-all-treatment-histories.component.css']
})
export class ViewAllTreatmentHistoriesComponent implements OnInit {

  public dataSource = new MatTableDataSource<TreatmentHistory>();
  public displayedColumns = ['starts', 'Patient Id', 'edit'];
  public treatmentHistories: TreatmentHistory[] = [];

  constructor(private treatmentHistoryService: TreatmentHistoryService, private router: Router,  private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.treatmentHistoryService.getAllTreatmentHistories().subscribe({
      next: (treatmentHistories) => {
        this.treatmentHistories = treatmentHistories;
        this.dataSource.data = this.treatmentHistories;
      },
      error: (err) => {
        console.log(err);
        //this.fetchingError = "Error fetching patients";
        //this.loading = false;
      }
    });
  }

  addExamination() {
  }

  public viewTreatmentHistory(id: number) : void {
    this.router.navigate([`/???examinations/edit/${id}`])
  }

}

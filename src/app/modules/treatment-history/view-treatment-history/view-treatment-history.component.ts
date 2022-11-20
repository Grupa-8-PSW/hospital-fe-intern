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



  constructor(private treatmentHistoryService: TreatmentHistoryService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.treatmentHistoryService.getTreatmentHistoryById(params['id']).subscribe(res => {
        this.treatmentHistory = res;
     //   this.dataSource.data = this.treatmentHistory;
     })
   });
 }

}

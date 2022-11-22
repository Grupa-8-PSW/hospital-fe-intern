import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BloodUnitRequest } from 'src/app/model/bloodUnitRequest';
import { BloodRequestServiceService } from '../services/blood-request-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { BloodTypePipe } from '../pipes/blood-type.pipe';

@Component({
  selector: 'app-view-blood-requests',
  templateUrl: './view-blood-requests.component.html',
  styleUrls: ['./view-blood-requests.component.css']
})
export class ViewBloodRequestsComponent {

  requests: BloodUnitRequest[] = [];
  displayedColumns: string[] = ['id', 'amountL', 'type', 'reason', 'creationDate', 'approve', 'reject'];

  dataSource = new MatTableDataSource(this.requests);

  constructor(private service: BloodRequestServiceService) { }

  ngOnInit(): void {
    this.service.getBloodRequests().subscribe(res => {
      const result = res.filter((r: any) => {
        return r.status === 2;
      })
      this.requests = res;
    })
  }

}

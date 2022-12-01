import { Component } from '@angular/core';
import Blood from 'src/app/model/blood';
import { BloodType } from 'src/app/model/bloodType';
import DateRange from 'src/app/model/dateRange';
import Tender from 'src/app/model/tender';
import { TenderStatus } from 'src/app/model/tenderStatus';
import { TenderService } from './tender.service';
@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent {

  dateRange: DateRange = new DateRange(null, null);
  blood: Blood[] = [];
  quantity = 0;
  type = '';

  ngOnInit(): void {
  }

  constructor(private service: TenderService){
  }

  addBlood(): void {
    this.blood.push(new Blood(BloodType[this.type as keyof typeof BloodType], this.quantity))
  }

  createTender(): void {
    this.service.createTender(new Tender(TenderStatus['Active' as keyof typeof TenderStatus], this.dateRange, this.blood));
  }
}

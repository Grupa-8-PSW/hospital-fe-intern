import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenovationAverageStatisticsComponent } from './renovation-average-statistics/renovation-average-statistics.component';
import { NgChartsModule } from 'ng2-charts';
import { RenovationTypeStatisticsComponent } from './renovation-type-statistics/renovation-type-statistics.component';
import { RenovationSessionsStatisticsComponent } from './renovation-sessions-statistics/renovation-sessions-statistics.component';



@NgModule({
  declarations: [
    RenovationAverageStatisticsComponent,
    RenovationTypeStatisticsComponent,
    RenovationSessionsStatisticsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    RenovationSessionsStatisticsComponent,
    RenovationAverageStatisticsComponent,
    RenovationTypeStatisticsComponent
  ]
})
export class StatisticsModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
    selected: Date | null | undefined;
    
    constructor(private router: Router) {}

    public chooseDate() { //selected
      if(this.selected != undefined && this.selected != null){
        const day = this.selected.getDate();
        const month = this.selected.getMonth() + 1; // Remember this increment
        const year = this.selected.getFullYear();

        this.router.navigate(['/examinations/' + day + "/" + month + "/" + year]);
      }
    }



    /*
    
    public getArrivalsReportSevenDayForecast(selectedDate1 : Date): Observable<ArrivalsReportSevenDayForecastModel[]> {
const params = new HttpParams();
const day = selectedDate1.getDate();
const month = selectedDate1.getMonth() + 1 // Remember this increment
const year = selectedDate1.getFullYear();

const data = this.svcHttp.get<ArrivalsReportSevenDayForecastModel[]>(this.routePrefix +
  `/arrivalreportsevendayforecast/${day}/${month}/${year}`, { params: params }).pipe(
  map<ArrivalsReportSevenDayForecastModel[], ArrivalsReportSevenDayForecastModel[]>(arrivingList => {
    // do mapping here if needed       
    return arrivingList;
  }),
  catchError((err) => this.svcError.handleError(err)));

return data;
}
    
    */

}

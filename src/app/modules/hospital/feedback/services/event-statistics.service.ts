import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AppointmentEventStatistic from 'src/app/model/appointment-event-statistic.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventStatisticsService {

  appointmentUrl = `${environment.apiUrL}/internal/Appointment/`;

  constructor(
    private http: HttpClient
  ) { }

  getStatistic() : Observable<AppointmentEventStatistic> {
    return this.http.get<AppointmentEventStatistic>(this.appointmentUrl + 'statistic');
  }
}

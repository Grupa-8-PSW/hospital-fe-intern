import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Doctor from 'src/app/model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorUrl = `${environment.apiUrL}/Doctor`;

  constructor(
    private http: HttpClient
  ) { }

  getDoctors() : Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorUrl);
  }

}

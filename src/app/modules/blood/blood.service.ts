import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Blood from './model/Blood';
import { environment } from 'src/environments/environment';
import { BloodType } from './model/BloodType';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  baseUrl = `${environment.apiUrL}/internal/Blood`
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Blood[]> {
    return this.http.get<Blood[]>(this.baseUrl).pipe();
  }

  createBloodRequest(bloodRequest: any): void {

  }
}

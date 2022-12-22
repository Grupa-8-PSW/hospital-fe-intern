import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Blood from './model/Blood';
import { environment } from 'src/environments/environment';
import { BloodType } from './model/BloodType';
import BloodUnitRequest from './model/BloodUnitRequest';
import BloodOrder from 'src/app/model/bloodOrder';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  
  baseUrl = `${environment.apiUrL}/internal/Blood`
  baseUrlBloodUnitRequest = `${environment.apiUrL}/internal/BloodUnitRequest`
  baseUrlUpdateUnclearRequest = `${environment.apiUrL}/internal/BloodUnitRequest/updateUnclearRequest`
  baseUrlOrderBlood = `${environment.apiUrL}/internal/BloodOrder`

  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient
  ) { }

  createBloodRequest(bloodRequest: BloodUnitRequest): Observable<any> {
    return this.http.post(this.baseUrlBloodUnitRequest, bloodRequest, { headers: this.headers });
  }

  getAll(): Observable<Blood[]> {
    return this.http.get<Blood[]>(this.baseUrl).pipe();
  }

  getAllBloodRequests() : Observable<BloodUnitRequest[]>{
    return this.http.get<BloodUnitRequest[]>(this.baseUrlBloodUnitRequest).pipe();
  }

  updateBloodRequest(bloodUnitRequest : BloodUnitRequest) : Observable<any> {
    return this.http.put(this.baseUrlUpdateUnclearRequest, bloodUnitRequest, {headers: this.headers});
  }

  getBloodOrderByType(bloodType: string) : Observable<BloodOrder[]>{
    return this.http.get<BloodOrder[]>(this.baseUrlOrderBlood+ "/" + bloodType).pipe(
     // map(treatmentHistory => {
     //   return {
     //     ...treatmentHistory,
          //startDate: moment(treatmentHistory.startDate),
          //endDate: string(treatmentHistory.endDate)
     //   }
    //  })
    );
  }
  
 

}




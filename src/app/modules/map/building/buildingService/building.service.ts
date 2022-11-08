import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../../model/building.model';
import { Room } from '../../model/rooms.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.apiHost + 'api/map/Building', { headers: this.headers });
  }

  buildingUrl = 'http://localhost:5174/api/map/Building';

  getAllBuildings() {
    return this.http.get<any>(this.buildingUrl);
  }

  getAllRooms() {
    return this.http.get<Room[]>(this.apiHost + 'api/map/floor/rooms/Room', { headers: this.headers });
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Floor } from '../../model/floors.model';

@Injectable({
    providedIn: 'root'
})
export class FloorsService {
    apiHost: string = 'http://localhost:5174/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getRooms(): Observable<Floor[]> {
        return this.http.get<Floor[]>(this.apiHost + 'api/map/floor/rooms/Room', { headers: this.headers });
    }

    getFloorByBuildingId(id): Observable<Floor[]> {
        return this.http.get<Floor[]>(this.apiHost + 'api/map/Floor/get/by/building/' + id, { headers: this.headers });
    }

}
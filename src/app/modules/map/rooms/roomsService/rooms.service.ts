import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../model/rooms.model';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    apiHost: string = 'http://localhost:5174/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.apiHost + 'api/map/floor/rooms/Room', { headers: this.headers });
    }

    getRoomByFloorId(id): Observable<Room[]> {
        return this.http.get<Room[]>(this.apiHost + 'api/map/floor/rooms/Room/get/by/floor/' + id, { headers: this.headers });
    }

}
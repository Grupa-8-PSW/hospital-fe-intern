import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../model/rooms.model';
import { EquipmentTransferDTO } from '../../model/equipmentTransferDTO.model';
import { FreeSpaceForTransfer } from '../../model/freeSpaceForTransfer.model';

import { RoomForSeparateDTO } from '../../model/roomForSeparateDTO.model';
import { SeparatedRooms } from '../../model/separatedRooms.model';
import { RoomsForMergeDTO } from '../../model/RoomsForMergeDTO.model';
import { MergedRoom } from '../../model/mergedRoom.model';
import { ShedulesDTO } from '../../model/shedulesDTO.model';
import { setupTestingRouter } from '@angular/router/testing';
import { ExaminationDTO } from '../../model/examinationDTO.model';
import { RenovateIntervalsDTO } from '../../model/renovateIntervalsDTO.model';
import RenovationSessionId from '../../model/renovationSessionId.model';

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

    getFreeSpaceList(dto: EquipmentTransferDTO): Observable<FreeSpaceForTransfer[]> {
        return this.http.post<FreeSpaceForTransfer[]>(this.apiHost + 'api/map/floor/rooms/Room/get/transferedEquipment', dto);
    }

    addEquipmentTrasfer(equipTransfer: EquipmentTransferDTO): Observable<EquipmentTransferDTO> {
        return this.http.post<EquipmentTransferDTO>(this.apiHost + 'api/map/floor/rooms/Room/post/transferedEquipment', equipTransfer);
    }

    getRenovateIntervals(renovateIntervals: RenovateIntervalsDTO): Observable<FreeSpaceForTransfer[]> {
        return this.http.post<FreeSpaceForTransfer[]>(this.apiHost + 'api/map/floor/rooms/Room/get/available', renovateIntervals);
    }

    getSeparatedRooms(dto: RoomForSeparateDTO): Observable<SeparatedRooms> {
        return this.http.post<SeparatedRooms>(this.apiHost + 'api/map/floor/rooms/Room/get/separatedRooms', dto);
    }

    getMergedRoom(dto: RoomsForMergeDTO): Observable<MergedRoom> {
        return this.http.post<MergedRoom>(this.apiHost + 'api/map/floor/rooms/Room/get/mergedRoom', dto);
    }

    getShedulesDTO(id: number): Observable<ShedulesDTO> {
        return this.http.get<ShedulesDTO>(this.apiHost + 'api/map/floor/rooms/Room/get/schedules/' + id, { headers: this.headers });
    }

    getSessionId(): Observable<number> {
        return this.http.post<number>(this.apiHost + 'api/Renovation/session/new', null);
    }

    sessionType(id: number): Observable<any> {
        console.log("type" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/type/' + id);
    }

    sessionRoom(id: number): Observable<any> {
        console.log("room" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/room/' + id);
    }

    sessionInterval(id: number): Observable<any> {
        console.log("interval" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/interval/' + id);
    }

    sessionDuration(id: number): Observable<any> {
        console.log("duration" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/duration/' + id);
    }

    sessionAvailable(id: number): Observable<any> {
        console.log("available" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/available/' + id);
    }

    sessionCreate(id: number): Observable<any> {
        console.log("create" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/create/' + id);
    }

    sessionSchedule(id: number): Observable<any> {
        console.log("schedule" + id);
        return this.http.get<any>(this.apiHost + 'api/Renovation/session/schedule/' + id);
    }

    deleteExe(id: number): Observable<any> {
        return this.http.delete<any>(this.apiHost + 'api/Examination/' + id)
    }
}
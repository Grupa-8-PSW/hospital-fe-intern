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


    getSeparatedRooms(dto: RoomForSeparateDTO): Observable<SeparatedRooms> {
        return this.http.post<SeparatedRooms>(this.apiHost + 'api/map/floor/rooms/Room/get/separatedRooms', dto);
    }

    getMergedRoom(dto: RoomsForMergeDTO): Observable<MergedRoom> {
        return this.http.post<MergedRoom>(this.apiHost + 'api/map/floor/rooms/Room/get/mergedRoom', dto);
    }

    getShedulesDTO(id: number): Observable<ShedulesDTO>{
        return this.http.get<ShedulesDTO>(this.apiHost + 'api/map/floor/rooms/Room/get/schedules/' + id, { headers: this.headers } );
    }

    deleteExe(id: number): Observable<any>{
        return this.http.delete<any>(this.apiHost + 'api/Examination/'+ id)
    }
}
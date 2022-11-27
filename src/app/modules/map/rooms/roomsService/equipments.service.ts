import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../../model/equipment.model';
import { EquipmentTransferDTO } from '../../model/equipmentTransferDTO.model';

@Injectable({
    providedIn: 'root'
})
export class EquipmentsService {
    apiHost: string = 'http://localhost:5174/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getAllEquipments(): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(this.apiHost + 'api/Equipment', { headers: this.headers });
    }

    getEquipmentsByRoomId(id): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(this.apiHost + 'api/Equipment/' + id, { headers: this.headers });
    }
    addEquipmentTrasfer(equipTransfer: EquipmentTransferDTO): Observable<EquipmentTransferDTO> {
        return this.http.post<EquipmentTransferDTO>(this.apiHost + 'api/Equipment', equipTransfer);
    }
}
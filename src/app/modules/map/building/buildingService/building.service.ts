import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuildingService {
    constructor(private http: HttpClient) { }

    buildingUrl = 'http://localhost:5174/api/map/Building';

    getAllBuildings() {
        return this.http.get<any>(this.buildingUrl);
    }
}
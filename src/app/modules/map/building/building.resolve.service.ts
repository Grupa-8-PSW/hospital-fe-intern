import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BuildingService } from "./buildingService/building.service";

@Injectable()
export class BuildingResolveService implements Resolve<any> {
    constructor(private buildingService: BuildingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.buildingService.getAllRooms().subscribe((data) => {
            console.log(data);
            return data;
        })
    }
}
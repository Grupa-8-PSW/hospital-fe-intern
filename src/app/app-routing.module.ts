import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { BuildingComponent } from "./modules/map/building/building.component";
import { FloorsComponent } from "./modules/map/floors/floors.component";
import { SignatureComponent } from "./modules/map/rooms/rooms.component";
import { ExaminationsGraphsComponent } from "./modules/map/examinations-graphs/examinations-graphs.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: BuildingComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'map/floor/:id', component: FloorsComponent },
  { path: 'map/floor/rooms/:floorId', component: SignatureComponent },
  { path: 'map/floor/rooms/:floorId/:roomId', component: SignatureComponent },
  { path: "examinations/graphs", component: ExaminationsGraphsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

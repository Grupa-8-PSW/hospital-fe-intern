import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { BlankComponent } from "./modules/map/app/blank/blank.component";
import { BuildingComponent } from "./modules/map/building/building.component";
import { FloorsComponent } from "./modules/map/floors/floors.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: BuildingComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'map/floor', component: FloorsComponent },
  { path: 'map/floor/rooms', component: BlankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

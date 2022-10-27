import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { SignatureComponent } from "../app/modules/map/app/signature/signature.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: SignatureComponent },
  { path: 'examinations', component: ExaminationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

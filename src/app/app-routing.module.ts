import { NgModule } from "@angular/core";
import { CreateBloodBankComponent } from "./modules/manager/create-blood-bank/create-blood-bank.component";
import { Routes, RouterModule } from "@angular/router";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'bloodBanks/add', component: CreateBloodBankComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

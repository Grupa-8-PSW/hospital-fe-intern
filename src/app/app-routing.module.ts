import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { ExaminationsComponent } from "./modules/pages/examinations/examinations.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'examinations', component: ExaminationsComponent },
  { path: 'bloodBanks', component: BloodBanksComponent},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBloodBankComponent } from "./modules/manager/create-blood-bank/create-blood-bank.component";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bloodBanks/add', component: CreateBloodBankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

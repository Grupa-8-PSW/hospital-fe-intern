import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BloodBanksComponent } from "./modules/pages/bloodBanks/blood-banks/blood-banks.component";
import { CreateBloodBankComponent } from "./modules/pages/bloodBanks/create-blood-bank/create-blood-bank.component";
import { CalendarComponent } from "./modules/pages/calendar/calendar.component";
import { HomeComponent } from "./modules/pages/home/home.component";
import { CheckBloodCountComponent } from "./modules/hospital/check-blood-count/check-blood-count.component";
import { AuthGuard } from "./modules/auth/helpers/auth.guard";
import { RoleGuard } from "./modules/auth/helpers/role.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bloodBanks', component: BloodBanksComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'bloodBanks/add', component: CreateBloodBankComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'checkBlood', component: CheckBloodCountComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Manager'] }},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Doctor'] } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

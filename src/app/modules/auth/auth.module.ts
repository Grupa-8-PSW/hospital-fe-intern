import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
  {path: 'auth/login', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    JwtModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }

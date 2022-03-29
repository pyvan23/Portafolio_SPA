import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{EditComponent}from'./components/edit/edit.component'
import { Router } from 'express';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

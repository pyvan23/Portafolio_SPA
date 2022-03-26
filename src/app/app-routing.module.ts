import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { Router } from 'express';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bar', component: ProgressBarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'bar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

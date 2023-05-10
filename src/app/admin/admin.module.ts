import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
// import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}]

@NgModule({
  declarations: [
    HomeComponent,
    // DietPlanFormComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AdminModule { }

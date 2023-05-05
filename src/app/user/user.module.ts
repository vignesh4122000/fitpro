import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { materialize } from 'rxjs';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },]
  }]
@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }

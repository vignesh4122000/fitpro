import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FoodProductsComponent } from './userhome/food-products/food-products.component';
import { FoodChildComponent } from './userhome/food-products/food-child/food-child.component';
import { FoodDetailsComponent } from './userhome/food-products/food-child/food-details/food-details.component';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './userhome/about-us/about-us.component';
import { NutritionalChartComponent } from './userhome/nutritional-chart/nutritional-chart.component';
import { HelpComponent } from './userhome/help/help.component';
import { DietPlansComponent } from './userhome/diet-plans/diet-plans.component';
import { ForumComponent } from './userhome/forum/forum.component';
import { LogoutComponent } from './userhome/logout/logout.component';
import { ContactUsComponent } from './userhome/contact-us/contact-us.component';
import { CreateDietComponent } from './userhome/create-diet/create-diet.component';



const route:Routes=[
//  {path:"details/:id",component:DetailsComponent},
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: FoodProductsComponent
    },
    {
      path: "about",
      component: AboutUsComponent
    },
    {
      path: "nutchart",
      component: NutritionalChartComponent
    },
    {
      path: "help",
      component: HelpComponent
    },
    {
      path: "diet",
      component: DietPlansComponent
    },
    {
      path: "form",
      component: ForumComponent
    },
    {
      path: "out",
      component: LogoutComponent
    },
    {
      path: "contact",
      component: ContactUsComponent
    },
    {
      path: "create",
      component: CreateDietComponent
    }
    
    

 
  
  ]
  }]
@NgModule({
  declarations: [
    HomeComponent,
    
    UserhomeComponent,
    FoodProductsComponent,
    FoodChildComponent,
    FoodDetailsComponent,
    FiltertypePipe,
    AboutUsComponent,
    HelpComponent,
    DietPlansComponent,
    ForumComponent,
    LogoutComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    FormsModule,
    HttpClientModule
    
  ]
})
export class UserModule { }

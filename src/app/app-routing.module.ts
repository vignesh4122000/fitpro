import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FoodDetailsComponent } from './user/userhome/food-products/food-child/food-details/food-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:":id",component:FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

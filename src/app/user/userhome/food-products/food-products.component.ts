import { Component } from '@angular/core';
import { DisplayallService } from 'src/app/services/displayall.service';

@Component({
  selector: 'app-food-products',
  templateUrl: './food-products.component.html',
  styleUrls: ['./food-products.component.css']
})
export class FoodProductsComponent {
  types=[

     "All",
    
     "Dairy products",
    
    "Fats, Oils, Shortenings",
    
     "Meat, Poultry",
    
     "Fish, Seafood",
    
    "Vegetables A-E",

    "Vegetables F-P",

    "Vegetables R-Z",

    "Fruits A-F",

    "Fruits G-P",

    "Fruits R-Z",

    "Breads, cereals, fastfood,grains",

    "Soups",

    "Desserts, sweets",

    "Jams, Jellies",

    "Seeds and Nuts",

    "Drinks,Alcohol, Beverages",
    
     ]
    
     selected="All";
    
     names:any;
    
     constructor(private is:DisplayallService){
    
     this.is.getdisplayall().subscribe(
    
      {
    
     next:(data:any)=>this.names=data,
    
     error:()=>this.names=[]
    
     }
    
     );
    
     }
    
    
    
    }
  
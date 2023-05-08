import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayallService } from 'src/app/services/displayall.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
  id:any;

  details:any;

  constructor(private Ds:DisplayallService,private ar:ActivatedRoute){

   

  this.ar.params.subscribe(

  {

  next:(params)=>{

     this.id =params['id']

    this.readData()

  },

  error: () => this.id = 0

   }

  )

}




   readData(){

   this.Ds.getDetails(this.id).subscribe(

        {

        next: (data:any)=>this.details=data,

        error: ()=> this.details = {}

     }

    )

 }

 

}



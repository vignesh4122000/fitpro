import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertype'
})
export class FiltertypePipe implements PipeTransform {
  transform(product : any, cat: string): any {
    if (cat == 'All')
     return product;
    else
       return product.filter((x:any)=> x.Category == cat);
  }
}

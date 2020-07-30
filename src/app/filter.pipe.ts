import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, charFind : string ): any {
    if(value.length == 0){
      return null;
    }
    const filterArray = [];
    for(let item of value){
      if(item.contains(charFind)){
        filterArray.push(value);
      }
    }
    return filterArray;
  }

}

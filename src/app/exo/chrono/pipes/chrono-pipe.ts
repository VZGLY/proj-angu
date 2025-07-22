import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let hours : number = Math.floor(value / 3600)
    let minutes : number = Math.floor(value / 60) % 60;
    let secondes : number = value % 60;  
    return `${hours} Heures ${minutes} Minutes ${secondes} Secondes.`;
  }

}

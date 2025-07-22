import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frDate'
})
export class FrDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    
    return value.toLocaleDateString(navigator.language, {
      day : "2-digit",
      month : "long",
      year : "2-digit"
    });
  }

}

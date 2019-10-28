import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandMillionPipe'
})
export class ThousandMillionPipe implements PipeTransform {

  transform(num: number): string {
    if (num >= 1000000) {
      return `${Math.round(num / 100000) / 10} Mil`;
    }
    if (num >= 1000) {
      return `${Math.round(num / 1000)}k`;
    }
    return num.toString();
  }
}

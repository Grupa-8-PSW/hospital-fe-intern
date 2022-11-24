import { Pipe, PipeTransform } from '@angular/core';
import { BloodType } from 'src/app/model/bloodType';

@Pipe({
  name: 'bloodType'
})
export class BloodTypePipe implements PipeTransform {

  transform(n: string): string {
    if (n === '0') {
      return '0+'
    }

    if (n === '1') {
      return '0-'
    }

    if (n === '2') {
      return 'A+'
    }

    if (n === '3') {
      return 'A-'
    }

    if (n === '4') {
      return 'B+'
    }

    if (n === '5') {
      return 'B-'
    }

    if (n === '6') {
      return 'AB+'
    }

    if (n === '7') {
      return 'AB-'
    }

    return '0-';
  }

}

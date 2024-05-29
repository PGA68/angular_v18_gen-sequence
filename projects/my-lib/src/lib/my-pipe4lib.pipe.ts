import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe4lib',
  standalone: true
})
export class MyPipe4libPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

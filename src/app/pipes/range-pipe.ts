import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
  pure: true,
  standalone: true
})
export class RangePipe implements PipeTransform {
  transform(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}

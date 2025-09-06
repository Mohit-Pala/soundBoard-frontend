import { Component } from '@angular/core';
import { RangePipe } from '../../pipes/range-pipe';

@Component({
  selector: 'app-about',
  imports: [RangePipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}

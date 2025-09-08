import { Component, OnInit } from '@angular/core';
import { TestService } from '../../api/generated/api/test.service';
import { Test } from '../../api/generated/model/test';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private testService: TestService) {}

  async ngOnInit() {
    const testData: Test = {
      name: 'NAME',
      description: 'test test'
    };

    console.log(await firstValueFrom(this.testService.testPussyPost(testData)));
  }
}

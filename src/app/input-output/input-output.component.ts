import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  StringProperty: string = "hello from parent component";

  updateNumberOfClicks(numerOfClicks: number)
  {
    this.numberOfClicksInChild = numerOfClicks;
  }

  numberOfClicksInChild: number = 0;
}

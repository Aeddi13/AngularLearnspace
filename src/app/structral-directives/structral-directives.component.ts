import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './structral-directives.component.html',
  styleUrls: ['./structral-directives.component.scss']
})
export class StructralDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShowContentNgIf: boolean;
  ItemsNgFor: number[] = [1,2,3,4,5,6,7];

}

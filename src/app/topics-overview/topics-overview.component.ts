import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './topics-overview.component.html',
  styleUrls: ['./topics-overview.component.scss']
})
export class TopicsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Topics: Topic[] = [{
    name: "Input + Output",
    routePath: "/inputoutput"
  }];

}

interface Topic {
  name: string;
  routePath: string;
}

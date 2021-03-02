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
  },
  {
    name: "Dummy 1",
    routePath: "/"
  },
  {
    name: "Dummy 2",
    routePath: "/"
  },
  {
    name: "Dummy 3",
    routePath: "/"
  }];

}

interface Topic {
  name: string;
  routePath: string;
}

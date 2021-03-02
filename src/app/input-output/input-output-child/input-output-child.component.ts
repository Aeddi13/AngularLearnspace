import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  templateUrl: './input-output-child.component.html',
  styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private numberOfClicks: number = 0;

  @Input() InputString: string;

  @Output() ButtonClickedEvent: EventEmitter<number> = new EventEmitter<number>();

  buttonClicked(){
    this.numberOfClicks++;
    this.ButtonClickedEvent.emit(this.numberOfClicks);
  }
}

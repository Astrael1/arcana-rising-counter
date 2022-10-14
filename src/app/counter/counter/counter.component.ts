import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent implements OnInit {

  @Output()
  valueIncrease = new EventEmitter();

  @Output()
  valueDecrease = new EventEmitter();

  @Input()
  value: number;

  @Input()
  backgroundImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}

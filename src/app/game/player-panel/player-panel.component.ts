import { Component, Input, OnInit } from '@angular/core';
import { ATTRIBUTE_INDEXES, PlayerAttributes, ZERO_ARRAY_FOR_ATTRIBUTES } from 'src/app/game/player-panel/player-attributes';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {

  @Input()
  playerNumber: number;

  attributeIndexes = ATTRIBUTE_INDEXES;
  attributeValues: Array<number>;

  constructor() { }

  ngOnInit(): void {
    this.attributeValues = [...ZERO_ARRAY_FOR_ATTRIBUTES];
  }

  increaseValue(index: number) {
    this.attributeValues[index]++;
  }

  decreaseValue(index: number) {
    this.attributeValues[index] = Math.max(--this.attributeValues[index], 0);
  }
}

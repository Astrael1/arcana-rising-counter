import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ATTRIBUTE_INDEXES, ZERO_ARRAY_FOR_ATTRIBUTES } from 'src/app/game/player-panel/player-attributes';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {

  @Input()
  playerVisualization: PlayerVisualization;

  attributeIndexes = ATTRIBUTE_INDEXES;
  attributeValues: Array<number>;

  constructor(
    public el: ElementRef
  ) { }

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

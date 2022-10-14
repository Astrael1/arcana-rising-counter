import { Component, OnInit } from '@angular/core';
import { PlayerAttributes } from 'src/app/game/player-panel/player-attributes';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {

  attributeIndexes = Object.keys(PlayerAttributes).map(v => Number(v)).filter(v => !isNaN(v));
  attributeValues: Array<number> = new Array<number>(this.attributeIndexes.length);

  constructor() { }

  ngOnInit(): void {
    this.attributeIndexes.forEach(attribute => this.attributeValues[attribute] = 0);
  }

  increaseValue(index: number) {
    this.attributeValues[index]++;
  }

  decreaseValue(index: number) {
    this.attributeValues[index] = Math.max(--this.attributeValues[index], 0);
  }
}

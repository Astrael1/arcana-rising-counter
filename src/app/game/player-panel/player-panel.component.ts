import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ATTRIBUTE_INDEXES, ZERO_ARRAY_FOR_ATTRIBUTES } from 'src/app/game/player-panel/player-attributes';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';
import { RotationDirection } from 'src/app/game/directives/RotationDirection';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerPanelComponent implements OnInit {

  @Input()
  playerVisualization: PlayerVisualization;

  attributeIndexes = ATTRIBUTE_INDEXES;
  attributeValues: Array<number>;

  constructor(
    public el: ElementRef
  ) {}

  ngOnInit(): void {
    this.attributeValues = [...ZERO_ARRAY_FOR_ATTRIBUTES];
  }

  increaseValue(index: number): void {
    this.attributeValues[index]++;
  }

  decreaseValue(index: number): void {
    this.attributeValues[index] = Math.max(--this.attributeValues[index], 0);
  }

  isRotated(orientation: RotationDirection): boolean {
    return orientation === RotationDirection.RIGHT || orientation === RotationDirection.LEFT;
  }
}

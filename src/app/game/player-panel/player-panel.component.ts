import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ATTRIBUTE_INDEXES, ZERO_ARRAY_FOR_ATTRIBUTES } from 'src/app/game/player-panel/player-attributes';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';
import { RotationDirection } from 'src/app/game/directives/RotationDirection';
import { GameService } from 'src/app/game/service/game/game.service';
import { InitializationError } from 'src/app/game/service/game/InitializationError';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerPanelComponent implements OnInit {

  @Input()
  playerVisualization: PlayerVisualization;

  @Input()
  playerIndex: number;

  attributeIndexes = ATTRIBUTE_INDEXES;
  attributeValues: Array<number> = [...ZERO_ARRAY_FOR_ATTRIBUTES];

  panelDisplayed: boolean = true;

  constructor(
    public el: ElementRef,
    private gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.observeAttributeValues();
  }

  private observeAttributeValues(): void {
    this.attributeIndexes.forEach((index) => {
        try {
          this.gameService.selectPlayerAttribute(
            this.playerIndex,
            index
          ).subscribe((value) => {
            this.attributeValues[index] = value;
          });
        } catch (e) {
          this.handleAttributeErrors(e);
        }
      }
    );
  }

  private handleAttributeErrors(e): void {
    if (e instanceof InitializationError) {
      this.panelDisplayed = false;
    } else {
      throw e;
    }
  }

  increaseValue(attributeIndex: number, step = 1): void {
    this.gameService.setAttributeValueForPlayer(
      this.playerIndex,
      attributeIndex,
      this.attributeValues[attributeIndex] + step
    );
  }

  decreaseValue(attributeIndex: number, step = 1): void {
    const value = this.attributeValues[attributeIndex] = Math.max(this.attributeValues[attributeIndex] - step, 0);
    this.gameService.setAttributeValueForPlayer(
      this.playerIndex,
      attributeIndex,
      value
    );
  }

  isRotated(orientation: RotationDirection): boolean {
    return orientation === RotationDirection.RIGHT || orientation === RotationDirection.LEFT;
  }
}

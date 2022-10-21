import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/game.service';
import { RotationDirection } from '../directives/RotationDirection';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css'],
})
export class GamePanelComponent implements OnInit {

  RotationDirection = RotationDirection;

  @HostBinding('class')
  classes = 'w-full h-full grid';

  playersNumber: number;
  players: Array<PlayerVisualization>;
  gridClasses: string;

  constructor(
    private readonly gameService: GameService
  ) { }

  ngOnInit(): void {
    this.playersNumber = 5;
    this.players = this.getPlayerVisualizations(this.playersNumber);
    this.gridClasses = this.getGridClasses(this.playersNumber);

  }

  private getPlayerVisualizations(playersNumber: number) {
    switch (playersNumber) {
      case 2:
        return [
          new PlayerVisualization(0, RotationDirection.RIGHT, 1),
          new PlayerVisualization(1, RotationDirection.LEFT, 1)
        ];
      case 3:
        return [
          new PlayerVisualization(0, RotationDirection.NONE, 2),
          new PlayerVisualization(1, RotationDirection.RIGHT, 1),
          new PlayerVisualization(2, RotationDirection.LEFT, 1),
        ];
      case 4:
        return [
          new PlayerVisualization(0, RotationDirection.RIGHT, 1),
          new PlayerVisualization(1, RotationDirection.LEFT, 1),
          new PlayerVisualization(2, RotationDirection.RIGHT, 1),
          new PlayerVisualization(3, RotationDirection.LEFT, 1),
        ]
      case 5:
        return [
          new PlayerVisualization(0, RotationDirection.NONE, 2),
          new PlayerVisualization(1, RotationDirection.RIGHT, 1),
          new PlayerVisualization(2, RotationDirection.LEFT, 1),
          new PlayerVisualization(3, RotationDirection.RIGHT, 1),
          new PlayerVisualization(4, RotationDirection.LEFT, 1),
        ]
      default:
        throw new Error(`Invalid number of players: ${playersNumber}`);
    }

  }

  private getGridClasses(playersNumber: number): string {
    const base = 'grid-cols-2';
    switch (playersNumber) {
      case 2:
        return base + ' grid-rows-1';
      case 3:
        return base + ' grid-rows-[minmax(0,_1fr)_minmax(0,_2fr)]';
      case 4:
        return base + ' grid-rows-2';
      case 5:
        return base + ' grid-rows-[minmax(0,_1fr)_minmax(0,_2fr)_minmax(0,_2fr)]';
      default:
        throw new Error(`Invalid number of players: ${playersNumber}`);
    }
  }
}

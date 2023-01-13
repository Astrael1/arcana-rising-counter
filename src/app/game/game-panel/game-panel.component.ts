import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/service/game/game.service';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css'],
})
export class GamePanelComponent implements OnInit {

  @HostBinding('class')
  classes = 'w-full h-full';

  playersNumber: number;
  players: Array<PlayerVisualization>;
  gridClasses: string;

  constructor(
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.playersNumber = this.gameService.playersNumber;
    this.players = this.gameService.getPlayerVisualizations(this.playersNumber);
    this.gridClasses = this.getGridClasses(this.playersNumber);

  }

  private getGridClasses(playersNumber: number): string {
    const base = 'grid-cols-2';
    switch (playersNumber) {
      case 1:
        return 'grid-cols-1 grid-rows-1';
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

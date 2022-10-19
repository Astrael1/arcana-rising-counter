import { Component, HostBinding, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/game.service';
import { RotationDirection } from '../directives/RotationDirection';

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

  playerRotations = [
    RotationDirection.NONE,
    RotationDirection.LEFT,
    RotationDirection.RIGHT,
    RotationDirection.UPSIDE_DOWN
  ]

  constructor(
    private readonly gameService: GameService
  ) { }

  ngOnInit(): void {
    this.playersNumber = this.gameService.playersNumber;
  }

  range(playersNumber: number) {
    return [...Array(playersNumber).keys()]
  }
}

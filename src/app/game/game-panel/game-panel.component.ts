import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/game.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  playersNumber: number;

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

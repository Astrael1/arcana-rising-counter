import { Injectable } from '@angular/core';
import { PlayerAttributes } from 'src/app/game/player-panel/player-attributes';

@Injectable()
export class GameService {

  get playersNumber(): number {
    return this._playersNumber;
  }

  set playersNumber(value) {
    this._playersNumber = value;
    this.playersAttributes = new Array<Array<number>>(value);

    this.playersAttributes = [];
    for(let i: number = 0; i < value; i++) {
      this.playersAttributes.push(Object.keys(PlayerAttributes).filter(v => !isNaN(Number(v) )).map(v => 0));
    }
  }

  private _playersNumber = 2;

  constructor() {
  }

  playersAttributes: Array< Array<number> >;


}

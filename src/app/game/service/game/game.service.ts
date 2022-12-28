import { Injectable } from '@angular/core';
import { ATTRIBUTE_INDEXES, PlayerAttributes } from 'src/app/game/player-panel/player-attributes';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { InitializationError } from 'src/app/game/service/game/InitializationError';
import { PlayerVisualization } from 'src/app/game/player-panel/PlayerVisualization';
import { RotationDirection } from 'src/app/game/directives/RotationDirection';

@Injectable()
export class GameService {

  private _playersNumber = 2;
  private _playerVisualizations: Array<PlayerVisualization>;

  get playersNumber(): number {
    return this._playersNumber;
  }

  set playersNumber(value: number) {
    this._playersNumber = value;
    this.playersAttributes = new Array<Array<BehaviorSubject<number>>>(value);

    this.playersAttributes = [];
    for(let i: number = 0; i < value; i++) {
      this.playersAttributes.push(
        ATTRIBUTE_INDEXES.map((_, index) => new BehaviorSubject(this.getAttributeInitialValue(index)))
      );
    }
    this._playerVisualizations = this.getPlayerVisualizations(value);
    this.playerVisualizations = new BehaviorSubject<Array<PlayerVisualization>>(this._playerVisualizations);
  }

  constructor() {
  }

  playersAttributes: Array<Array<BehaviorSubject<number>>>;
  playerVisualizations: BehaviorSubject<Array<PlayerVisualization>>;

  public selectPlayerAttribute(player: number, attribute: number): Observable<number> {
    try {
      return this.playersAttributes[player][attribute].asObservable();
    } catch (e) {
      if(e instanceof TypeError) {
        throw new InitializationError('Player attribute observables have not been initialized');
      }
      else {
        throw e;
      }
    }
  }

  public setPlayerName(player: number, name: string): void {
    this._playerVisualizations[player].playerName = name;
    this.playerVisualizations.next(this._playerVisualizations);
  }

  public getPlayerScore(player: number): number {
    return this.getPlayerAttribute(player, PlayerAttributes.VICTORY_POINTS) +
      this.getPlayerAttribute(player, PlayerAttributes.GOLD) -
      this.getPlayerAttribute(player, PlayerAttributes.BLOOD) +
      Math.floor(this.getPlayerAttribute(player, PlayerAttributes.CHARM) / 3) +
      Math.floor(this.getPlayerAttribute(player, PlayerAttributes.HERBS) / 3) +
      Math.floor(this.getPlayerAttribute(player, PlayerAttributes.POTIONS) / 3)
  }

  public setAttributeValueForPlayer(player: number, attribute: number, value: number): void {
    this.playersAttributes[player][attribute].next(value);
  }

  public resetGame(): void {
    this.playersAttributes.forEach(player => {
      player.forEach((attribute, index) => {
        attribute.next(this.getAttributeInitialValue(index));
      })
    })
  }

  private getPlayerAttribute(player: number, attribute: number): number {
    let result: number;
    this.playersAttributes[player][attribute]
      .pipe(take(1))
      .subscribe(value => {
        return result = value;
      });
    return result;
  }

  private getAttributeInitialValue(attribute: number): number {
    return attribute === PlayerAttributes.VICTORY_POINTS ? 0 : 1;
  }

  public getPlayerVisualizations(playersNumber: number): Array<PlayerVisualization> {
    switch (playersNumber) {
      case 1:
        return [
          new PlayerVisualization(0, RotationDirection.NONE, 1)
        ]
      case 2:
        return [
          new PlayerVisualization(0, RotationDirection.RIGHT, 1),
          new PlayerVisualization(1, RotationDirection.LEFT, 1)
        ];
      case 3:
        return [
          new PlayerVisualization(0, RotationDirection.UPSIDE_DOWN, 2),
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
          new PlayerVisualization(0, RotationDirection.UPSIDE_DOWN, 2),
          new PlayerVisualization(1, RotationDirection.RIGHT, 1),
          new PlayerVisualization(2, RotationDirection.LEFT, 1),
          new PlayerVisualization(3, RotationDirection.RIGHT, 1),
          new PlayerVisualization(4, RotationDirection.LEFT, 1),
        ]
      default:
        throw new Error(`Invalid number of players: ${playersNumber}`);
    }

  }

}

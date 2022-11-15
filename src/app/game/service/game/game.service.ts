import { Injectable } from '@angular/core';
import { ATTRIBUTE_INDEXES } from 'src/app/game/player-panel/player-attributes';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { InitializationError } from 'src/app/game/service/game/InitializationError';

@Injectable()
export class GameService {

  static ATTRIBUTE_INITIAL_VALUE = 1;

  get playersNumber(): number {
    return this._playersNumber;
  }

  set playersNumber(value: number) {
    this._playersNumber = value;
    this.playersAttributes = new Array<Array<BehaviorSubject<number>>>(value);

    this.playersAttributes = [];
    for(let i: number = 0; i < value; i++) {
      this.playersAttributes.push(
        ATTRIBUTE_INDEXES.map(() => new BehaviorSubject(GameService.ATTRIBUTE_INITIAL_VALUE))
      );
    }
  }

  private _playersNumber = 2;

  constructor() {
  }

  playersAttributes: Array<Array<BehaviorSubject<number>>>;

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

  public setAttributeValueForPlayer(player: number, attribute: number, value: number): void {
    this.playersAttributes[player][attribute].next(value);
  }

  public resetGame(): void {
    this.playersAttributes.forEach(player => {
      player.forEach(attribute => {
        attribute.next(GameService.ATTRIBUTE_INITIAL_VALUE);
      })
    })
  }

}

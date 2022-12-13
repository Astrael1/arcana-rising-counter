import { RotationDirection } from 'src/app/game/directives/RotationDirection';

export class PlayerVisualization {
  constructor(
    public playerNumber: number,
    public orientation: RotationDirection,
    public colspan: number,
    public playerName?: string,
  ) {
    if(!playerName) {
      this.playerName = `Player ${this.playerNumber}`;
    }
  }

}

import { RotationDirection } from 'src/app/game/directives/RotationDirection';

export class PlayerVisualization {
  constructor(
    public playerNumber: number,
    public orientation: RotationDirection,
    public colspan: number,
  ) {}

}

import { Pipe, PipeTransform } from '@angular/core';
import { PlayerAttributes } from 'src/app/game/player-panel/player-attributes';

@Pipe({
  name: 'counterBackground'
})
export class CounterBackgroundPipe implements PipeTransform {

  attributeToBackground = {
    [PlayerAttributes.CHARM]: this.colorsToGradient('#fbe1ff', '#ff33cc', '#b00988'),
    [PlayerAttributes.HERBS]: this.colorsToGradient('#f7ff8d', '#22e30d', '#008d15'),
    [PlayerAttributes.BLOOD]: this.colorsToGradient('#fc587e', '#98000d', '#3f0202'),
    [PlayerAttributes.POTIONS]: this.colorsToGradient('#69d6ff', '#340dd0', '#1e0086'),
    [PlayerAttributes.GOLD]: this.colorsToGradient('#fff059', '#c0a110', '#9d5408'),
    [PlayerAttributes.VICTORY_POINTS]: this.colorsToGradient('#ca89ff', '#4505b4', '#270073')
  }

  transform(value: PlayerAttributes): string {
    return this.attributeToBackground[value];
  }

  colorsToGradient(topColor: string, middleColor: string, bottomColor?: string): string {
    if(bottomColor) {
      return `linear-gradient(to bottom, ${topColor}, ${middleColor} 33%, ${middleColor} 75%, ${bottomColor} 100%)`;
    }
    return `linear-gradient(to bottom, ${topColor}, ${middleColor} 33%)`;
  }

}

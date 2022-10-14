import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { CounterModule } from 'src/app/counter/counter.module';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { GameService } from 'src/app/game/game.service';



@NgModule({
  declarations: [
    PlayerPanelComponent,
    GamePanelComponent
  ],
  imports: [
    CommonModule,
    CounterModule
  ],
  exports: [
    GamePanelComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { CounterModule } from 'src/app/counter/counter.module';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { GameService } from 'src/app/game/game.service';
import { SetupComponent } from './setup/setup.component';
import { RotateDirective } from 'src/app/game/directives/rotate.directive';



@NgModule({
  declarations: [
    PlayerPanelComponent,
    GamePanelComponent,
    SetupComponent,
    RotateDirective
  ],
  imports: [
    CommonModule,
    CounterModule
  ],
	exports: [
		GamePanelComponent,
		SetupComponent
	],
  providers: [
    GameService
  ]
})
export class GameModule { }

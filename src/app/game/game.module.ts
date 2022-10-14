import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { CounterModule } from 'src/app/counter/counter.module';



@NgModule({
  declarations: [
    PlayerPanelComponent
  ],
  imports: [
    CommonModule,
    CounterModule
  ],
  exports: [
    PlayerPanelComponent
  ]
})
export class GameModule { }

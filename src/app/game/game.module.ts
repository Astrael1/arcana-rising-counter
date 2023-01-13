import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import { CounterModule } from 'src/app/counter/counter.module';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { GameService } from 'src/app/game/service/game/game.service';
import { SetupComponent } from './setup/setup.component';
import { RotateDirective } from 'src/app/game/directives/rotate.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CounterBackgroundPipe } from './player-panel/counter-background.pipe';



@NgModule({
  declarations: [
    PlayerPanelComponent,
    GamePanelComponent,
    SetupComponent,
    RotateDirective,
    CounterBackgroundPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CounterModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    GamePanelComponent,
    SetupComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule {
}

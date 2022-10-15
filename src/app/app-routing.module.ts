import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePanelComponent } from 'src/app/game/game-panel/game-panel.component';
import { SetupComponent } from 'src/app/game/setup/setup.component';

const routes: Routes = [
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
  { path: 'setup', component: SetupComponent},
  { path: 'game', component: GamePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

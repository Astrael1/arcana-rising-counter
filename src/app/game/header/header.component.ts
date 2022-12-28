import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game/service/game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class')
  classes = 'flex justify-end bg-blue-900 text-stone-50';

  constructor(
    private readonly router: Router,
    private readonly gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  navigateToSetup(): void {
    this.router.navigateByUrl('/setup');
  }

  resetGame(): void {
    this.gameService.resetGame();
  }

  showScore() {
    const players = this.gameService.playersNumber;
    for(let i = 0; i < players; i++) {
      console.log(this.gameService.getPlayerScore(i));
    }
  }
}

import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game/game.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  @HostBinding('class')
  classes = 'w-full h-full flex justify-center items-center bg-gray-900';

  playerForm = this.formBuilder.group({
    playersNumber: new FormControl()
  });

  playerNumberOptions = [2,3,4,5];

  valuePresent: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly gameService: GameService
  ) {
  }

  ngOnInit(): void {
    this.playerForm.valueChanges.subscribe(value => {
      this.valuePresent = !!value.playersNumber;
    });
  }

  onFormSubmit(): void {
    this.gameService.playersNumber = this.playerForm.value.playersNumber;
    this.router.navigateByUrl('/game');
  }
}

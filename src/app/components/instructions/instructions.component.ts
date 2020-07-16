import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  instructions = `Pripravte Angular aplikáciu, ktorá sa skladá aspoň z 2 modulov a 
  demonštrujte znalosť oboch prístupov na tvorbu formulárov v Angular – template based a reactive. 
  Ako zdroj dát použite niektoré z free public API ako napr. www.openweathermap.org . 
  Výstupy: 1. postup build-u aplikácie 2. dev server z ktorého aplikácia bude servovaná 3. unit testy`;

  constructor() { }

  ngOnInit() {
  }

}

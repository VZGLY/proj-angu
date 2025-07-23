import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-tableau',
  imports: [],
  templateUrl: './tableau.html',
  styleUrl: './tableau.scss'
})
export class Tableau {
  maListe : InputSignal<string[]> = input.required<string[]>();
}

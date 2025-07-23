import { Component, input, InputSignal, output, OutputEmitterRef, signal } from '@angular/core';

@Component({
  selector: 'app-tableau',
  imports: [],
  templateUrl: './tableau.html',
  styleUrl: './tableau.scss'
})
export class Tableau {
  maListe : InputSignal<string[]> = input.required<string[]>();

  deleteOutput : OutputEmitterRef<number> = output<number>();

  deletePressed(id: number): void{
    this.deleteOutput.emit(id)
  }

}

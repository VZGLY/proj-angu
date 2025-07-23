import { Component, signal } from '@angular/core';
import { Enfant } from '../enfant/enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {

  valeurParent : string = 'Bonjour enfant !'

  valeurEnfant = signal("")

  EvenementEnfant(value : string) : void{
    this.valeurEnfant.set(value)
  }

}

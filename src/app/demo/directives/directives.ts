import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgStyle],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class Directives {

  visible = signal(true)

  correctStyle = signal({
    "background-color" : "green"
  })

  badStyle = signal({
    "background-color" : "red"
  })

  maList = signal(["peche", "pomme", "poire", "abricot", "scoobidoo"])

  setVisibility() : void {
    this.visible.set(!this.visible())
  }

}

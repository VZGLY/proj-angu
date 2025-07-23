import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss'
})
export class Enfant implements OnInit {

  valeurDuParent = input.required<string>();

  enfantOutput = output<string>()

  ngOnInit(): void {
    this.enfantOutput.emit("Bonjour Parent !")
  }

  emit(){
    this.enfantOutput.emit("Emit via button")
  }

}

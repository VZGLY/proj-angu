
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FrDatePipe } from '../../pipes/fr-date-pipe';


@Component({
  selector: 'app-binding',
  standalone : true,
  imports: [FormsModule, FrDatePipe],
  templateUrl: './binding.html',
  styleUrl: './binding.scss'
})
export class Binding {

  isDisabled = signal(true);

  date = signal(new Date())

  maVar : WritableSignal<string> = signal("Bonjour");

  twoWay = signal("Bonsoir");

  hideValue = signal(false);

  maMethode() : void {
    setTimeout(() => {
      this.maVar.set(this.twoWay())
    }, 1000)
  }

  hide() : void{
    this.hideValue.set(!this.hideValue())
  }
}

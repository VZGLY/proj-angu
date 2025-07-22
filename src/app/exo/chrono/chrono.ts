import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { ChronoPipe } from './pipes/chrono-pipe';

@Component({
  selector: 'app-chrono',
  imports: [ChronoPipe],
  templateUrl: './chrono.html',
  styleUrl: './chrono.scss'
})
export class Chrono {

  secondes = signal(0);

  isRunning = signal(false)

  intervalNumber = signal(0)

  start() : void {
    this.intervalNumber.set(
      setInterval(() => {
        this.secondes.set(this.secondes() + 1)
      }, 1000)
    )

    this.isRunning.set(true);
  }

  pause() : void {
    clearInterval(this.intervalNumber())

    this.isRunning.set(false)
  }

  reset() : void {
    this.pause()

    this.secondes.set(0)
  }

}

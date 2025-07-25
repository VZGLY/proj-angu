
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PokeService } from './services/poke-service';
import { pokemon } from './models/pokemon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http',
  imports: [FormsModule],
  templateUrl: './http.html',
  styleUrl: './http.scss'
})
export class Http{
 
  _pokeService = inject(PokeService)

  poke : WritableSignal<pokemon | undefined> = signal(undefined)
  
  idSelectionne = signal(0)

  cherchePokemon(){
    this._pokeService.getPokemonById(this.idSelectionne()).subscribe({
      next : (pokem : pokemon) => {
        this.poke.set(pokem)
      },
      error : (err) => {
        console.error(err.message)
      }
    })
  }

  
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private _http = inject(HttpClient)
  
  getPikachu() : Observable<pokemon>{
    return this._http.get<pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu")
  }

  getPokemonById(id: number){
    return this._http.get<pokemon>("https://pokeapi.co/api/v2/pokemon/" + id)
  }

}

import { Injectable, signal, WritableSignal } from '@angular/core';
import { Personne } from '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  personnes : WritableSignal<Personne[]> = signal([
    {name : 'Gustave', age : 23}
  ])
  
  ajouterPersonne(personne : Personne){
    this.personnes.update(x => [...x, personne])
  }

  recupererParId(id : number) : Personne | undefined{
    if (id >= this.personnes().length) {
      return undefined
    }
    return this.personnes()[id]
  }

}

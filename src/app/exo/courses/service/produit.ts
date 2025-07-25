import { Injectable, signal, WritableSignal } from '@angular/core';
import { item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class Produit {

  produits : WritableSignal<item[]> = signal([])

  ajouter(valeur : string){
    let list = this.produits();
    let element = list.find(x => x.name === valeur)
    if (element) {
      element.nbr++;
    }
    else{
      list.push({name : valeur, nbr : 1})
    }
    this.produits.set(list)
  }
}

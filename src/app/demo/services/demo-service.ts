import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  serviceValeur = signal("Valeur du service.")

  serviceMethode(){
    return "Retour de service methode"
  }
}

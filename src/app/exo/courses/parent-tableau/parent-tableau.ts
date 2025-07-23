import { Component, signal, WritableSignal } from '@angular/core';
import { Tableau } from "../tableau/tableau";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-tableau',
  imports: [Tableau, FormsModule],
  templateUrl: './parent-tableau.html',
  styleUrl: './parent-tableau.scss'
})
export class ParentTableau {

  produits : WritableSignal<string[]> = signal(["riri", "loulou"])

  nouveauProduit = signal("")

  ajouter(){
  //   let liste = this.produits()
  //   liste.push(this.nouveauProduit())
  //   this.produits.set(liste)

    this.produits.update(x => [...x, this.nouveauProduit()])
    this.nouveauProduit.set("");
  }

  deleteElem(id : number){

    this.produits.set(this.produits().filter((_, i) => i !== id))
    
  }
}

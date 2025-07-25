import { Component, inject, signal } from '@angular/core';
import { PersonnesService } from './services/personnes-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnes',
  imports: [],
  templateUrl: './personnes.html',
  styleUrl: './personnes.scss'
})
export class Personnes {

  _personneService = inject(PersonnesService)

  _router = inject(Router)

  personnes = signal(this._personneService.personnes())

  allerACreation(){
    this._router.navigate(['/exo', 'personne', 'create'])
  }

  allerAuDetail(index :number){
    this._router.navigate(['/exo', 'personne', index])
  }

}

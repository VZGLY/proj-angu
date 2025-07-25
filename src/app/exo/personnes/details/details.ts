import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnesService } from '../services/personnes-service';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class Details implements OnInit {
   
  _activatedRoute = inject(ActivatedRoute)

  _personneService = inject(PersonnesService)

  personne : WritableSignal<Personne | undefined> = signal(undefined)

  ngOnInit(): void {
    let currentId = this._activatedRoute.snapshot.params['id']

    this.personne.set(this._personneService.recupererParId(currentId))
  }

 
}

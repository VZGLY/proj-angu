import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.html',
  styleUrl: './routing.scss'
})
export class Routing implements OnInit {
  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id']
    if (id >= this.personnes.length) {
      this.personne.set("404")
    }
    else{
      this.personne.set(`${this.personnes[id].name}, ${this.personnes[id].age} age.`)
    }
  }

  personnes = [
    {name : 'Jean', age : 42},
    {name : 'Khun', age : 25},
    {name : 'Gavin', age : 29},
    {name : 'Benji', age : 29},
    {name : 'J-M', age : 24},
  ]

  _router = inject(Router)

  _activatedRoute = inject(ActivatedRoute)

  personne = signal("")

  retourSurBinding(){
    this._router.navigate(["/demo", "binding"])
  }

}

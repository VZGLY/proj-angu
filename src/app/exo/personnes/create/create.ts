import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonnesService } from '../services/personnes-service';
import { Personne } from '../models/Personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {

  _formBuilder = inject(FormBuilder)

  _personneService = inject(PersonnesService)

  _router = inject(Router)

  formGroup = this._formBuilder.group({
    name : [null, [Validators.required, Validators.minLength(2)]],
    age : [null, [Validators.required, Validators.min(1), Validators.max(120)]]
  })

  envoyer(){
    if (this.formGroup.valid) {
      let personne : Personne = {
        name : this.formGroup.value.name!,
        age : this.formGroup.value.age!
      }

      this._personneService.ajouterPersonne(personne)

      this._router.navigate(['/exo', 'personnes'])

    }
  }

}

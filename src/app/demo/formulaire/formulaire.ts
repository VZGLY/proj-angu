import { NgFor } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss'
})
export class Formulaire{
  
  _formBuilder : FormBuilder = inject(FormBuilder)

  // Form Control

  control = this._formBuilder.control("Bonjour", [Validators.required])

  controlMessage = signal("")

  validerControl(){
    if (this.control.valid) {
      this.controlMessage.set("Formulaire valide")
    }
    else{
      this.controlMessage.set("Formulaire invalide")
    }
    
  }

  // Form Group

  regex : RegExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/

  formGroup = this._formBuilder.group({
    email : [null, [Validators.email, Validators.required]],
    password : [null, [Validators.required, Validators.pattern(this.regex)]]
  })

  groupMessage = signal("")

  validerGroup(){
    if (this.formGroup.valid) {
      this.groupMessage.set("Formulaire valide")
    }
    else{
      this.groupMessage.set("Formulaire invalide")
    }
  }


  // Form Array

  formGroupArray = this._formBuilder.group({
    name : [null, Validators.required],
    members : this._formBuilder.array([new FormControl(null, Validators.required)])
  })

  recupererArray() {
    return this.formGroupArray.get('members') as FormArray
  }

  ajouterControl(){
    this.recupererArray().push(new FormControl(null, Validators.required))
  }

  retirerControl(index : number){
    this.recupererArray().removeAt(index)
  }

}

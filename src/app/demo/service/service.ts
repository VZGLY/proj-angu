import { Component, inject } from '@angular/core';
import { DemoService } from '../services/demo-service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {

  _demoService = inject(DemoService)

  resetServiceValue(){
    this._demoService.serviceValeur.set("Valeur réinitialisée")
  }

}

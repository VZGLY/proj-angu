import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Link } from '../models/Link';

@Component({
  selector: 'app-exo',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './exo.html',
  styleUrl: './exo.scss'
})
export class Exo {
 liens : Link[] = [
  {name : 'Chrono', url : ['chrono'], isVisible : true},
  {name : 'Tableau', url : ['tableau'], isVisible : true},
  {name : 'Personnes', url : ['personnes'], isVisible : true}
 ]
}

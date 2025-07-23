import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Link } from '../models/Link';


@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {
  liens : Link[] = [
    {name : 'Demo', url : ['/demo'], isVisible : true},
    {name : 'Exo', url: ['/exo'], isVisible : true}
  ]
}

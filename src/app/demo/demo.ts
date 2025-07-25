import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Link } from '../models/Link';

@Component({
  selector: 'app-demo',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class Demo {
  liens : Link[] = [
    {name : 'Binding', url : ['binding'], isVisible : true},
    {name : 'Directives', url : ['directives'], isVisible : true},
    {name : 'Input', url : ['input'], isVisible : true},
    {name : 'Service', url : ['service'], isVisible : true},
    {name : 'Formulaire', url : ['formulaire'], isVisible : true},
    {name : 'Routing', url : ['routing'], isVisible : true}
  ]
}

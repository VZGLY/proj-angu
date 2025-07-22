import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Binding } from './demo/binding/binding';

export const routes: Routes = [
    {
        path : 'demo', component : Demo, children : [
            {
                path : 'binding', component: Binding
            }
        ]
    },
    {
        path : 'exo', component : Exo
    }
];

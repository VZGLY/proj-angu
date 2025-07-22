import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Binding } from './demo/binding/binding';
import { Chrono } from './exo/chrono/chrono';
import { Directives } from './demo/directives/directives';

export const routes: Routes = [
    {
        path : 'demo', component : Demo, children : [
            {
                path : 'binding', component: Binding
            },
            {
                path : 'directives', component: Directives
            }
        ]
    },
    {
        path : 'exo', component : Exo, children : [
            {
                path : 'chrono', component : Chrono
            }
        ]
    }
];

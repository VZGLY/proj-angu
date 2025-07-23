import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Binding } from './demo/binding/binding';
import { Chrono } from './exo/chrono/chrono';
import { Directives } from './demo/directives/directives';
import { Parent } from './demo/input/parent/parent';
import { ParentTableau } from './exo/courses/parent-tableau/parent-tableau';

export const routes: Routes = [
    {
        path : 'demo', component : Demo, children : [
            {
                path : 'binding', component: Binding
            },
            {
                path : 'directives', component: Directives
            },
            {
                path : 'input', component: Parent
            }
        ]
    },
    {
        path : 'exo', component : Exo, children : [
            {
                path : 'chrono', component : Chrono
            },
            {
                path : 'tableau', component : ParentTableau
            }
        ]
    }
];

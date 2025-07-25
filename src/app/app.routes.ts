import { Routes } from '@angular/router';
import { Demo } from './demo/demo';
import { Exo } from './exo/exo';
import { Binding } from './demo/binding/binding';
import { Chrono } from './exo/chrono/chrono';
import { Directives } from './demo/directives/directives';
import { Parent } from './demo/input/parent/parent';
import { ParentTableau } from './exo/courses/parent-tableau/parent-tableau';
import { Service } from './demo/service/service';
import { Formulaire } from './demo/formulaire/formulaire';
import { Routing } from './demo/routing/routing';

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
            },
            {
                path : 'service', component: Service
            },
            {
                path : 'formulaire', component: Formulaire
            },
            {
                path : 'routing/:id', component: Routing
            },
            {
                path : 'routing', component: Routing
            },
            {
                path : "**", redirectTo : "binding"
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
    },
    {path : "**", redirectTo : "demo"}
];

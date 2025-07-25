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
import { Personnes } from './exo/personnes/personnes';
import { Details } from './exo/personnes/details/details';
import { Create } from './exo/personnes/create/create';
import { Http } from './demo/http/http';

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
                path : 'http', component: Http
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
            },
            {
                path : 'personnes', component : Personnes
            },
            {
                path : 'personne/create', component : Create
            },
            {
                path : 'personne/:id', component : Details
            }
        ]
    },
    {path : "**", redirectTo : "demo"}
];

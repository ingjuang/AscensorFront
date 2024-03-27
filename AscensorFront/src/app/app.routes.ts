import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'elevator', loadComponent: ()=> import('./components/elevator/elevator.component')},
    {path:'', redirectTo: 'elevator', pathMatch:'full'},
    {path:'**', redirectTo:'elevator', pathMatch:'full'}
];

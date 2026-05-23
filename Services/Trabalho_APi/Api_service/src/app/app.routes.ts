import { Routes } from '@angular/router';
import { Corpo_apresentacao } from './Components/corpo_apresentacao/Corpo_apresentacao';
import { LayoutPublico } from './Layouts/layout-publico/layout-publico';
import { CorpoModelo } from './Components/corpo-modelo/corpo-modelo';

export const routes: Routes = [

{
path:'',
component: LayoutPublico,
children :[
{ path: '', redirectTo: 'apresentacao', pathMatch: 'full' },
{ path: 'apresentacao', component: Corpo_apresentacao },
{ path: 'modelo', component: CorpoModelo },
]

}
,
 {path:'**',redirectTo:'404 ERROR',pathMatch:'full'}
  
];

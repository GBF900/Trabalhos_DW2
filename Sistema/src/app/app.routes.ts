import { Routes } from '@angular/router';
import { LayoutPublic } from './Layouts/layout-public/layout-public';
import { CorpoDet } from './Components/Corpo-det/corpo-det';
import { CorpoProd } from './Components/Corpo-prod/corpo-prod';
import { CorpoHome } from './Components/corpo-home/corpo-home';
import { CorpoDet0 } from './Components/corpo-det0/corpo-det0';
import { Detalhamento } from './Pages/Detalhamento/Detalhes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPublic,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },  
      { path: 'home', component: CorpoHome},
      { path: 'produtos', component: CorpoProd },  
    ]
  }, 
  {    
  path: 'produtos',
    component: Detalhamento, 
    children: [
      { path: '0', component: CorpoDet0 },
      { path: ':id', component: CorpoDet },
    
    ]
  },
  {path:'**',redirectTo:'404 ERROR',pathMatch:'full'}

];

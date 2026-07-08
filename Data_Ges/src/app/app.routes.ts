import { Routes } from '@angular/router';
import { CanDeactivateGuard } from './Guards/can-deactive-guard';
import { CadastroProduto } from './Componentss/cadastro-produto/cadastro-produto';
import { Categorias } from './Pages/categorias/categorias';
import { Produtos } from './Pages/produtos/produtos';

import { loginGuardGuard } from './Guards/login-guard-guard';
import { authGuardGuard } from './Guards/auth-guard-guard';
import { CadastroCategoria } from './Componentss/cadastro-categoria/cadastro-categoria';
import { LayoutPublico } from './Layouts/layout-publico/layout-publico';
import { LayoutPrivado } from './Layouts/layout-privado/layout-privado';
import { Login } from './Pages/login/login';

export const routes: Routes = [

  {
    path: '',
    component: LayoutPublico,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login, canActivate: [loginGuardGuard] }
    ]
  },

  {
    path: '',
    component: LayoutPrivado,
    canActivate: [authGuardGuard],
    canActivateChild: [authGuardGuard],
    children: [
      { path: 'produtos', component: Produtos },
      { path: 'produtos/novo', component: CadastroProduto, canDeactivate: [CanDeactivateGuard] },
      { path: 'produtos/:id', component: CadastroProduto, canDeactivate: [CanDeactivateGuard] },
      { path: 'categorias', component: Categorias },
      { path: 'categorias/nova', component: CadastroCategoria, canDeactivate: [CanDeactivateGuard] },
      {
        path: 'categorias/:id',
        component: CadastroCategoria,
        canDeactivate: [CanDeactivateGuard]
      }

    ]
  },

  {
    path: '**', redirectTo: 'login'
  }
];

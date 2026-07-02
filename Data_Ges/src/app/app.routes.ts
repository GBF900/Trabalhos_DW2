import { Routes } from '@angular/router';
import { CanDeactivateGuard } from './Guards/can-deactive-guard';
import { CadastroProduto } from './Componentss/cadastro-produto/cadastro-produto';
import { Categorias } from './Pages/categorias/categorias';
import { Produtos } from './Pages/produtos/produtos';
import { Login } from './Pages/login/login';
import { loginGuardGuard } from './Guards/login-guard-guard';
import { authGuardGuard } from './Guards/auth-guard-guard';
import { CadastroCategoria } from './Componentss/cadastro-categoria/cadastro-categoria';
import { LayoutPublico } from './Layouts/layout-publico/layout-publico';
import { LayoutPrivado } from './Layouts/layout-privado/layout-privado';

export const routes: Routes = [
 
  // =====================
  // PUBLICO
  // =====================
  {
    path: '',
    component: LayoutPublico,
    children: [
      { path: 'login', component: Login },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // =====================
  // PRIVADO
  // =====================
  {
    path: '',
    component: LayoutPrivado,
    canActivate: [authGuardGuard],
    children: [
      { path: 'categorias', component: Categorias },
      { path: 'produtos', component: Produtos },
      // opcional (boa prática)
      { path: '', redirectTo: 'produtos', pathMatch: 'full' }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

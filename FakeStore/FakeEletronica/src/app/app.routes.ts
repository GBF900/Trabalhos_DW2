import { Routes } from '@angular/router';
import { LayoutPublico } from './Layout/layout-publico/layout-publico';
import { Home } from './Paginas/home/home';
import { ProdutoDetalhes } from './Paginas/produto-detalhes/produto-detalhes';
import { PerfilUsuario } from './Paginas/perfil-usuario/perfil-usuario';
import { Login } from './Paginas/login/login';
import { Carrinho } from './Paginas/carrinho/carrinho';
import { Cadastro } from './Components/cadastro/cadastro';

export const routes: Routes = [
    {
    path:'',
    component:LayoutPublico,
    children:[
        {path:'',redirectTo: 'login', pathMatch: 'full' },
     
        {path:'login', component: Login},

        {path: 'home', component: Home},

        {path:'produto/:id',component:ProdutoDetalhes},
         
        {path:'meusProdutos',component:Carrinho},

        {path:'perfil',component:PerfilUsuario},
  
        { path: 'cadastro', component: Cadastro},
    ]
},

{path:'**',redirectTo:'login',pathMatch:'full'}

];

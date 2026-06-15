import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../../Servicos/carrinho';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho implements OnInit{
  quantidadeItensCarrinho =0;
  constructor(public router: Router,private carrinhoServico: CarrinhoService) {}

  ngOnInit(): void {

     this.carrinhoServico.itens$.subscribe({
      next:(itens)=> {this.quantidadeItensCarrinho = itens.reduce(
                    (total,item)=> total + item.quantidade, 0);
      }
    });



  }

estaNaTelaLogin(): boolean {
  return this.router.url === '/login';
}

estaNaTelaCadastro(): boolean {
  return this.router.url === '/cadastro';
}



 isRotaAtiva(rota: string): boolean {
  return this.router.url == rota;
}
   
logout(): void {
  localStorage.removeItem('usuario');
  this.router.navigate(['/login']);
}

}

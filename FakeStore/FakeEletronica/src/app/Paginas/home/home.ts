import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../Servicos/produto-service';
import { Carregando } from "../../Components/carregando/carregando";
import { CardProduto } from '../../Components/card-produto/card-produto';
import { Usuario } from '../../Servicos/usuario-service';
import { AutenticacaoService } from '../../Servicos/autenticacao-service';

@Component({
  selector: 'app-home',
  imports: [Carregando, CardProduto],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  produtos: Produto[] = [];
  usuario?: Usuario | null;
  
  carregando = true;

  constructor(private productService: ProdutoService, 
  private autenticacaoService: AutenticacaoService){}
  
  ngOnInit(){  
    this.carregarUsuarioLogado()
    console.time('API')
    this.carregarProdutos()
  
  }

  carregarProdutos(){
   this.productService.getProdutos().subscribe({
      next:(dados)=>{ this.produtos = dados;
                     this.carregando = false;},

      error:()=>{this.carregando = false;}
    });
  }

  carregarUsuarioLogado(){
    this.usuario = this.autenticacaoService.getUsuarioLogado()

  }

}


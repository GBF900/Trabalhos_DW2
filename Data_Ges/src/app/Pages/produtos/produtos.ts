import { Component } from '@angular/core';
import { Produto } from '../../Models/produto';
import { Categoria } from '../../Models/categoria';
import { Router } from '@angular/router';
import { ProdutoService } from '../../Services/produto-service';
import { CategoriaService } from '../../Services/categoria-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: Produto[] = [];
  categorias: Categoria[] = [];
  carregando = false;
  textoPesquisa = '';
  categoriaSelecionada = '';

  precoMinimo!: number;
  precoMaximo!: number;

  constructor(
    private produtosService: ProdutoService,
    private categoriasService: CategoriaService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.carregarCategorias();

    this.buscarProdutos();

  }

  carregarCategorias(): void{

    this.categoriasService.listar().subscribe({

      next: (resposta: Categoria[]) => this.categorias = resposta

    });

  }

  buscarProdutos(): void{

    this.carregando = true;

    this.produtosService.filtrar( this.textoPesquisa, this.categoriaSelecionada,this.precoMinimo,this.precoMaximo
    ).subscribe({
    next: (resposta: Produto[]) =>{
        this.produtos = resposta;

      },

    complete: ()=>{

        this.carregando = false;

      }

    });

  }

  limparFiltros(): void{

    this.textoPesquisa = '';

    this.categoriaSelecionada = '';

    this.precoMinimo = 0;

    this.precoMaximo = 0;

    this.buscarProdutos();

  }

  editar(produto: Produto){
    this.router.navigate(['/produtos',produto.id]);

  }

 excluir(produto:Produto){

const confirmar=confirm(`Deseja excluir "${produto.title}"?`);

if(confirmar){
alert("Produto excluído ");
}


}
}
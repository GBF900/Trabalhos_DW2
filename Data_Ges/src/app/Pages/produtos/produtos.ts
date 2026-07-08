import { Component } from '@angular/core';
import { Produto } from '../../Models/produto';
import { Categoria } from '../../Models/categoria';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../Services/produto-service';
import { CategoriaService } from '../../Services/categoria-service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule, CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtos: Produto[] = [];
  categorias: Categoria[] = [];
  carregando = false;
  carregandoMais = false;
  erro = '';
  textoPesquisa = '';
  categoriaSelecionada = '';
  limite = 20;
  offset = 0;
  temMaisProdutos = false;

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
    this.offset = 0;
    this.carregarProdutos();
  }

  carregarMais(): void {
    if (this.carregandoMais || !this.temMaisProdutos) {
      return;
    }

    this.offset += this.limite;
    this.carregarProdutos(true);
  }

  private carregarProdutos(acumular = false): void {
    this.erro = '';

    if (acumular) {
      this.carregandoMais = true;
    } else {
      this.carregando = true;
    }

    this.produtosService.filtrar(
      this.textoPesquisa,
      this.categoriaSelecionada,
      this.precoMinimo,
      this.precoMaximo,
      this.limite,
      this.offset
    ).pipe(
      finalize(() => {
        this.carregando = false;
        this.carregandoMais = false;
      })
    ).subscribe({
    next: (resposta: Produto[]) =>{
        this.temMaisProdutos = resposta.length === this.limite;
        this.produtos = acumular ? [...this.produtos, ...resposta] : resposta;

      },

    error: () => {
        this.erro = 'Nao foi possivel carregar os produtos agora.';
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

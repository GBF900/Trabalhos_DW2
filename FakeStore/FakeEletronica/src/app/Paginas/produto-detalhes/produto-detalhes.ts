import { Component } from '@angular/core';
import { Produto, ProdutoService } from '../../Servicos/produto-service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TranslateService } from '../../Servicos/traducao';
import { CarrinhoService } from '../../Servicos/carrinho';

@Component({
  selector: 'app-produto-detalhes',
  imports: [CurrencyPipe],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.css',
})
export class ProdutoDetalhes {
  produto?: Produto;

  mostrarModalSucesso = false;
  mostrarModalErro = false;
  carregando = true;

  constructor(private route: ActivatedRoute,private productService: ProdutoService, 
  private tradutorService: TranslateService, private Carrinho: CarrinhoService) {}

  

  ngOnInit(): void {
  this.route.params.subscribe(params => {

    const id = Number(params['id']);

    console.log('ID recebido:', id);

    this.buscarProduto(id);
  });

  }

  buscarProduto(id: number): void {
    this.productService.getProduto(id).subscribe({
        next: (produto) => {this.produto = produto
                            this.carregando = false;
        },
        error: (erro) => {console.error(erro); 
                         this.carregando = false;
        }

    });

  }

  traduzirDesc(desc: string) {
    return this.tradutorService.traduzir(desc)
}
adicionarAoCarrinho(): void {
  if(!this.produto){
    this.mostrarModalErro = true;
    return;
  }

  const sucesso = this.Carrinho.adicionar(this.produto);

  if(sucesso){
    this.mostrarModalSucesso = true;
  }

  else{
    this.mostrarModalErro = true;
  }
}

}
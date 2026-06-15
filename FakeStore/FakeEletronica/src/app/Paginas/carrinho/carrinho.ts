import { Component } from '@angular/core';
import { CarrinhoItem, CarrinhoService } from '../../Servicos/carrinho';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe,],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  itens:CarrinhoItem[] = [];
  valorTotal = 0;

constructor( private carrinhoSrevice:CarrinhoService ){}
 

  ngOnInit(): void {

    this.carrinhoSrevice.itens$.subscribe({
    next:(itens)=>{this.itens = itens;
                  this.calcularTotal();  
    }
    });

  }

  calcularTotal(): void {
    this.valorTotal = this.carrinhoSrevice.getTotal()

  }

  finalizarPedido(): void {
    if(this.itens.length === 0){
    alert("Pedido não pode ser finalizado")
    }

  else{
    alert('Pedido finalizado com sucesso!');
   
    this.carrinhoSrevice.limpar();
  }
}

  remover(id:number): void {
    this.carrinhoSrevice.remover(id);
  }

  aumentarProdutosCarrinho(id:number): void{
  this.carrinhoSrevice.aumentarQuantidade(id);
 }

  diminuirProdutosCarrinho(id:number): void{
  this.carrinhoSrevice.diminuirQuantidade(id);
 }

 excluirTodosProdutosCarrinho(){
  if (this.itens.length<=0){
    alert("Não há produtos no carrinho. Acesse nossa pagina de home e confira nossos produtos")
  }
  else {
  this.carrinhoSrevice.limpar();
 }
}
}



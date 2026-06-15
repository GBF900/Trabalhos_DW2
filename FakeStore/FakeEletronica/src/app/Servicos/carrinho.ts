import { Injectable } from '@angular/core';
import { Produto } from './produto-service';
import { BehaviorSubject } from 'rxjs';

export interface CarrinhoItem{
    produto: Produto;
    quantidade:number;
}

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {

  #chaveCarrinho = 'carrinho';

  private itens: CarrinhoItem[] = [];

  private itensSubject =
    new BehaviorSubject<CarrinhoItem[]>([]);

  itens$ = this.itensSubject.asObservable();

  constructor(){
    this.carregarCarrinho();
  }

  adicionar(produto: Produto): boolean {

    try{
      const existente = this.itens.find( item => item.produto.id === produto.id);
      if(existente){
        existente.quantidade++;
      }

      else{
        this.itens.push({ produto,quantidade: 1 });

      }
      this.salvarCarrinho();
      return true;
    }
    catch(error){
      console.error(error);
      return false;
    }

  }

  remover(id:number): void {
    this.itens = this.itens.filter(item => item.produto.id !== id);
    this.salvarCarrinho();
  }

  limpar(): void {
    this.itens = [];
    this.salvarCarrinho();
  }

  listar(): CarrinhoItem[] {
    return this.itens;
  }

  private salvarCarrinho(): void {
    if(typeof localStorage === 'undefined'){
    return;
    }

    localStorage.setItem( this.#chaveCarrinho, JSON.stringify(this.itens));
    this.itensSubject.next(this.itens);
  }

  carregarCarrinho(): void { 
    if(typeof localStorage === 'undefined'){
    return;
  }
  const dados = localStorage.getItem( this.#chaveCarrinho);

  if(dados){
    this.itens = JSON.parse(dados);
    this.itensSubject.next(this.itens);  
  }
}

  aumentarQuantidade(id:number): void{
  const item = this.itens.find(i => i.produto.id === id);

  if(item){
    item.quantidade++;
    this.salvarCarrinho();
  }
  
}

diminuirQuantidade(id:number): void{
  const item = this.itens.find( i => i.produto.id === id);

  if(!item) return;

  if(item.quantidade > 1){
    item.quantidade--;
  }

  else{
    this.remover(id);
    return;

  }

  this.salvarCarrinho();
}

getTotal(): number{
  return this.itens.reduce((total,item)=>total +(item.produto.price * 5 * item.quantidade),0);
}


}
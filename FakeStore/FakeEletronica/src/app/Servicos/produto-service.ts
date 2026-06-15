import { HttpClient } from '@angular/common/http';
import id from '@angular/common/locales/id';
import { inject, Injectable } from '@angular/core';
import { map,Observable, of, tap } from 'rxjs';


export interface Rating {
  rate: number;
  count: number;
}

export interface Produto{
  image: string
  id: number 
  title: string
  price: number 
  category: string
  description: string
  rating : Rating 
}


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  #listaProdutos: Produto[] =[]
   #api= "https://fakestoreapi.com"
   
   #http= inject(HttpClient)


getProdutos(): Observable<Produto[]> {

  console.log('Cache:', this.#listaProdutos);

  if(this.#listaProdutos!.length > 0){

    console.log('Retornando cache');

    return of(this.#listaProdutos);

  }

  console.log('Buscando API');

  return this.#http.get<Produto[]>(`${this.#api}/products`)
    .pipe(

      tap(produtos => {

        console.log('Produtos recebidos:', produtos.length);

        this.#listaProdutos = produtos;

      })

    );

}



    getProduto(id : number): Observable<Produto>{
    return this.#http.get<Produto>(`${this.#api}/products/${id}`)
   }

   
}

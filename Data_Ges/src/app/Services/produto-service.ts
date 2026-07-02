import { Injectable } from '@angular/core';
import { Produto } from '../Models/produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  #api="https://api.escuelajs.co/api/v1/products";

constructor(private http:HttpClient){}

  listar():Observable<Produto[]>{
  return this.http.get<Produto[]>(this.#api);

}

  buscar(id:number){
  return this.http.get<Produto>(`${this.#api}/${id}`);
}

filtrar(titulo?: string, categoria?: string, precoMin?: number,precoMax?: number){

  let params: any = {};

  if(titulo){
    params.title = titulo;
  }

  if(categoria){
    params.categoryId = categoria;
  }

  if(precoMin != null){
    params.price_min = precoMin;
  }

  if(precoMax != null){
    params.price_max = precoMax;
  }

  return this.http.get<Produto[]>(this.#api,{ params });
}


}

import { Injectable } from '@angular/core';
import { Produto } from '../Models/produto';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  #api="https://api.escuelajs.co/api/v1/products";

constructor(private http:HttpClient){}

  listar(limit = 20, offset = 0): Observable<Produto[]> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);

    return this.http.get<Produto[]>(this.#api, { params });

}

  buscar(id:number){
  return this.http.get<Produto>(`${this.#api}/${id}`);
}

filtrar(
  titulo?: string,
  categoria?: string,
  precoMin?: number,
  precoMax?: number,
  limit = 20,
  offset = 0
): Observable<Produto[]> {

  let params = new HttpParams()
    .set('limit', limit)
    .set('offset', offset);

  if(titulo){
    params = params.set('title', titulo);
  }

  if(categoria){
    params = params.set('categoryId', categoria);
  }

  if(precoMin != null){
    params = params.set('price_min', precoMin);
  }

  if(precoMax != null){
    params = params.set('price_max', precoMax);
  }

  return this.http.get<Produto[]>(this.#api,{ params });
}


}

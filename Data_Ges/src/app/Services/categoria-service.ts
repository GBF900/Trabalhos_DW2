import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../Models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  #api="https://api.escuelajs.co/api/v1/categories";

constructor(private http:HttpClient){}

  listar():Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.#api);

}

  buscar(id:number){
  return this.http.get<Categoria>(`${this.#api}/${id}`);
}
}

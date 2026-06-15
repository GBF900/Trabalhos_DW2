import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Nome{
  firstname: string
  lastname: string
}

interface Endereco{
city: string
street:string
number : number
zipcode: string

}


export interface Usuario{
address: Endereco
email: string
username: string
password : string
name: Nome
phone: string
}


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
    #api= "https://fakestoreapi.com"
   
   #http= inject(HttpClient)


   getUsuarios(): Observable<Usuario[]>{
    return this.#http.get<Usuario[]>(`${this.#api}/users`)
   }

    getUsuario(id : number): Observable<Usuario>{
    return this.#http.get<Usuario>(`${this.#api}/users/${id}`)
   }
}

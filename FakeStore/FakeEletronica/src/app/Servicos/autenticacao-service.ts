import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from './usuario-service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
   #api= "https://fakestoreapi.com"
   
   #http= inject(HttpClient)

   autenticarUsuario(usuario : Usuario){
   this.#http.post<Usuario>(`${this.#api}/auth/login`, usuario)

   }

 getUsuarioLogado(): Usuario | null {
  const usuario = localStorage.getItem('usuario');

  if(!usuario){
    alert("Usuario não logado")
    return null;
  }
  return JSON.parse(usuario);
}
}

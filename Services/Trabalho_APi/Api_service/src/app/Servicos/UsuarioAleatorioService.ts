import { HttpClient, provideHttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Usuario{
  nome: string,
  sobrenome: string,
  idade: number ,
  usuario: string;
  senha:string,
  email:string,
  telefone: string,
  pais:string,
  nacionalidade:string,
  genero:string,

}


@Injectable({
  providedIn: 'root',
})


export class UsuarioAleatorioService {
  #api = inject(HttpClient);

  getUsuario(): Observable<Usuario> {

    return this.#api
      .get<any>('https://randomuser.me/api/?nat=br&results=10')
      .pipe(

        map((res) => {

          const user = res.results[0];

          return {

            nome: user.name.first,

            sobrenome: user.name.last,

            idade: user.dob.age,

            usuario: user.login.username,

            senha: user.login.password,

            email: user.email,

            telefone: user.phone,

            pais:this.traduzirPais(user.location.country) ,

            nacionalidade: user.nat,

            genero: user.gender === 'male' ? 'Masculino' : 'Feminino'

          };

        })

      );

  }

traduzirPais(pais: string): string {

  const paises: any = {

    Brazil: 'Brasil',

    Germany: 'Alemanha',

    Japan: 'Japão',

    France: 'França',

    Spain: 'Espanha',

    Italy: 'Itália',

    Portugal: 'Portugal',

    Canada: 'Canadá',

    Australia: 'Austrália',

    Mexico: 'México',

    Argentina: 'Argentina',

    Netherlands: 'Holanda',

    Switzerland: 'Suíça',

    Belgium: 'Bélgica',

    Norway: 'Noruega',

    Sweden: 'Suécia',

    Finland: 'Finlândia',

    Denmark: 'Dinamarca',

    Ireland: 'Irlanda',

    Poland: 'Polônia',

    Turkey: 'Turquia',

    Ukraine: 'Ucrânia',

    Russia: 'Rússia',

    China: 'China',

    South_Korea: 'Coreia do Sul',

    India: 'Índia',

    United_States: 'Estados Unidos',

    United_Kingdom: 'Reino Unido'

  };

  return paises[pais] || pais;

}

}

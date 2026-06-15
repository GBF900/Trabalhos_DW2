import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Traducao {
  translatedText: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  #api = 'http://localhost:5000/translate';
  constructor( private http: HttpClient) {}

  traduzir( texto: string, origem: string = 'en', destino: string = 'pt' ): Observable<Traducao> {

    return this.http.post<Traducao>(this.#api,{
        q: texto,
        source: origem,
        target: destino,
        format: 'text'
      }
    );

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api="https://api.escuelajs.co/api/v1";

constructor(private http:HttpClient){}

login(email:string,password:string):Observable<any>{
  return this.http.post<any>(`${this.api}/auth/login`,{email,password});

}

  perfil(){

  return this.http.get(`${this.api}/auth/profile`);

  }

}

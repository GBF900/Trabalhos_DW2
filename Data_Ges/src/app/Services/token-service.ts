import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private KEY = 'token';

  salvar(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  obter(): string | null {
    return localStorage.getItem(this.KEY);
  }

  logOut(): void {
    localStorage.removeItem(this.KEY);
  }

  estaLogado(): boolean {
    return !!this.obter();
  }
}

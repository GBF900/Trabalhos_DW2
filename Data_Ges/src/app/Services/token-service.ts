import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private KEY = 'token';
  private storage: Storage | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage = localStorage;
    }
  }



  salvar(token: string) {
    this.storage?.setItem(this.KEY, token);
  }

  obter(): string | null {
    return this.storage?.getItem(this.KEY) ?? null;
  }

  logOut(): boolean {
    if (this.storage) {
      this.storage.removeItem(this.KEY);
      return true;
    }

    return false;
  }

  estaLogado(): boolean {
    return !!this.obter();
  }
}

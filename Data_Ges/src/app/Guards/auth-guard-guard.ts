import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../Services/token-service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.estaLogado()) {
    return true;
  }

  return router.parseUrl('/login');
};

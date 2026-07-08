import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../Services/token-service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const tokenService = inject(TokenService);
    const token = tokenService.obter();

    if (token) {
        req = req.clone({setHeaders: {Authorization:`Bearer ${token}`}});
    }

    return next(req);
}
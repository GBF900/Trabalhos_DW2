import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { TokenService } from '../../Services/token-service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
#fb = inject(FormBuilder);
mostrarSenha = false

  constructor(private authService : AuthService,private tokenService : TokenService,
              private router :Router){};

  carregando = false;

  erro = '';

  formulario = this.#fb.group({
    email: ['admin@mail.com',[ Validators.required,Validators.email]],

    password: ['admin123',Validators.required]

  });

  login(): void {

    if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;

    }

    this.carregando = true;
    this.erro = '';
    
    const { email, password } = this.formulario.value;
    this.authService.login(email!,password!).subscribe({

      next: (res: { access_token: any; }) => {

        this.tokenService.salvar(res.access_token);
        this.router.navigate(['/produtos']);
      },

      error: () => {

        this.carregando = false;
        this.erro =
          'Usuário ou senha inválidos.';
        },

      complete: () => {
        this.carregando = false;
      }

    });

  }

  mostrarSenhaClick(){
    this.mostrarSenha = !this.mostrarSenha
  }

}

import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [ ReactiveFormsModule, NgClass],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  mostrarSenha=false;

  #fb = inject(FormBuilder);

  constructor(private router: Router){}

  cadastroForm = this.#fb.group({

    firstname:['', Validators.required],

    lastname:['', Validators.required],

    username:['', Validators.required],

    email:['',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password:[
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });

  cadastrar(): void {

    if(this.cadastroForm.invalid){

      this.cadastroForm.markAllAsTouched();

      return;
    }

    const usuario = {

      id: crypto.randomUUID(),

      email: this.cadastroForm.value.email,

      username: this.cadastroForm.value.username,

      password: this.cadastroForm.value.password,

      name: {

        firstname: this.cadastroForm.value.firstname,
        lastname: this.cadastroForm.value.lastname

      }

    };

    localStorage.setItem('usuario',JSON.stringify(usuario));

    this.router.navigate(['/home']);

  }

  voltarLogin(): void {
    this.router.navigate(['/login']);
  }
 
  toggleSenha(){
   this.mostrarSenha = !this.mostrarSenha

  }

}

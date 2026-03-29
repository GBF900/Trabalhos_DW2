import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-ficha',
  imports: [FormsModule,CommonModule],
  templateUrl: './ficha.html',
  styleUrl: './ficha.css',
})
export class Ficha {

 isActive = false; 

  usuario = {
    nome: '',
    email: '',
    idade: null,
    senha:'',
    password2:'',
    genero: '',
    cidade: '',
    termos: false
  };

mensagemSucesso:string="";
mostrarModal = false;

onSubmit(form: NgForm) {
    if (this.usuario.senha !== this.usuario.password2) {
      return;
    }

    if (form.valid) {
    this.mostrarModal = true; // 🔥 abre o modal
    }
  }

  fecharModal(form:NgForm) {
  this.mostrarModal = false;
  this.usuario = {
    nome: '',
    email: '',
    idade: null,
    senha: '',
    password2: '',
    genero: '',
    cidade: '',
    termos: false
  };

  form.resetForm(this.usuario);
  }

  // Função que decide a classe do botão
getButtonClass(form: NgForm) {
  return (form.valid && this.usuario.senha === this.usuario.password2)
    ? 'btn-active'
    : 'btn-inactive';
}

mostrarSenha = false;

toggleSenha() {
  this.mostrarSenha = !this.mostrarSenha;
}

mostrarConfirmarSenha = false;

toggleConfirmarSenha() {
  this.mostrarConfirmarSenha = !this.mostrarConfirmarSenha;
}

}
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  imports: [FormsModule,CommonModule],
  templateUrl: './ficha.html',
  styleUrl: './ficha.css',
})
export class Ficha {
  constructor(private cdr: ChangeDetectorRef) {}

 isActive = false; 

  usuario = {
    nome: '',
    email: '',
    idade: 18,
    senha:'',
    password2:'',
    genero: '',
    cidade: '',
    termos: false
  };

mostrarModal = false;

fecharModal(form: NgForm) {
  this.mostrarModal = false;
   
  setTimeout(() => {
    form.resetForm({
      nome: '',
      email: '',
      idade: 18,
      senha: '',
      password2: '',
      genero: '',
      cidade: '',
      termos: false
    });
  });
   }


onSubmit(form: NgForm) {
    if (this.usuario.senha !== this.usuario.password2) {
      return;
    }

    if (form.valid) {
    this.mostrarModal = true; 
    }
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
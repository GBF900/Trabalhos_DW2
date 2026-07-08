import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ficha.html',
  styleUrl: './ficha.css',
})
export class Ficha {
  #form = inject(FormBuilder)
  formsMat = this.#form.group({
    nome: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.minLength(6)]],
    idade: [18,[Validators.required,Validators.min(18)]],
    senha:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,Validators.minLength(6)]],
    genero:['',Validators.required],
    cidade:['',Validators.required],
    termos:[false,Validators.required]
      
  })
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

fecharModal() {
  this.mostrarModal = false;
   
  setTimeout(() => {
    this.formsMat.reset();
  });
   }


onSubmit() {
    if (!this.formsMat.valid) {
      this.formsMat.markAllAsTouched();
    }
    else{ 
     this.mostrarModal = true; 
    this.usuario = {
    nome: this.formsMat.get('nome')!.value!,
    email: this.formsMat.get('emial')!.value!,
    idade: this.formsMat.get('idade')!.value!,
    senha:this.formsMat.get('senha')!.value!,
    password2:this.formsMat.get('password2')!.value!,
    genero: this.formsMat.get('genero')!.value!,
    cidade: this.formsMat.get('cidade')!.value!,
    termos: this.formsMat.get('termos')!.value!
    }
  
  }
  }

  
  // Função que decide a classe do botão
getButtonClass() {
  return (this.formsMat.valid )
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
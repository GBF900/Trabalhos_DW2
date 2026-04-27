import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-corpo',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './corpo.html',
  styleUrl: './corpo.css',
})
export class Corpo {

  @Input() forms!: FormGroup;
  @Output() addTel = new EventEmitter<void>();
  @Output() removeTel = new EventEmitter<number>();
  @Input() mostrarModal = false;
  @Input() dadosResumo: any;
 
 
  mostrarSenha = false;
  mostrarConfirmarSenha = false;
  submitForm: any;

formValido(): boolean {
  return this.forms.valid;
}

getButtonClass() {
  return this.formValido() ? 'btn-active' : 'btn-inactive';
}

formatarTelefone(i: number) {
  let valor = this.telefones.at(i).value || '';
  valor = valor.replace(/\D/g, ''); // remove tudo que não é número
  this.telefones.at(i).setValue(valor, { emitEvent: false });
}

onSubmit() {
  if (this.forms.invalid) {
    this.forms.markAllAsTouched(); // força mostrar erros
    return;
  }

  this.dadosResumo = this.forms.value;
  this.mostrarModal = true;
}

fecharModal() {
  this.mostrarModal=false;
  this.forms.reset();
}


get telefones(): FormArray {
  return this.forms.get('telefones') as FormArray;
}

adicionarTelefone() {
  this.telefones.push(this.getCampo('telefones')!.value);
}


getCampo(nome: string) {
  return this.forms.get(nome);
}

campoInvalido(nome: string): boolean {
  const c = this.getCampo(nome);
  return !!(c && c.invalid && (c.touched || c.dirty));
}

temErro(campo: string, erro: string): boolean {
  return !!this.getCampo(campo)?.errors?.[erro];
}
 
getMensagemErro(campo: string): string | null {
  const control = this.getCampo(campo);

  if (!control || !control.errors) return null;

  if (control.errors['required']) return 'Campo obrigatório';
  if (control.errors['email']) return 'Email inválido';
  if (control.errors['minlength']) return 'Mínimo de caracteres não atingido';
  if (control.errors['pattern']) return 'Formato inválido';
  if (control.errors['min']) return 'Valor abaixo do permitido';
  if (control.errors['requiredTrue']) return 'Você deve aceitar os termos';

  return null;
}


toggleSenha() {
  this.mostrarSenha = !this.mostrarSenha;
}

toggleConfirmarSenha() {
  this.mostrarConfirmarSenha = !this.mostrarConfirmarSenha;
}


}

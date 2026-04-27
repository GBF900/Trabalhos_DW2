import { Component, inject } from '@angular/core';
import { Cabecalho } from "../cabecalho/cabecalho";
import { Corpo } from "../corpo/corpo";
import { AbstractControl, FormArray, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

function senhasIguais(control: AbstractControl): ValidationErrors | null {
  const senha = control.get('senha')?.value;
  const confirm = control.get('confirmsenha')?.value;

  if (!senha || !confirm) return null;

  return senha === confirm ? null : { senhasDiferentes: true };
}

@Component({
  selector: 'app-forms',
  imports: [Cabecalho, Corpo,ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  
  mostrarModal = false;
  dadosResumo: any = null;

 
  private fb= inject(FormBuilder);
 
  forms= this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]],
    idade:[18, [Validators.required, Validators.min(18)]],
    senha:['', [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Za-z0-9]+$')]],
    confirmsenha:['',[Validators.required, Validators.minLength(6)]],
    genero:['',[Validators.required]],
    cidade:['',[Validators.required]],
    termos: [false, Validators.requiredTrue] ,
    telefones: this.fb.array( [this.criarTelefone()],[Validators.minLength(1)]
    )},
    {
    validators: senhasIguais
    });   
  
criarTelefone() {
  return this.fb.control('', [
    Validators.required,
    Validators.pattern(/^\d{10,11}$/)
  ]);
}
  get telefones(): FormArray {
    return this.forms.get('telefones') as FormArray;
  }

  adicionarTelefone() {
    this.telefones.push(this.criarTelefone());
  }

  removerTelefone(index: number) {
  if (this.telefones.length > 1) {
    this.telefones.removeAt(index);
  }
}

onSubmit() {
  if (this.forms.invalid) {
    this.forms.markAllAsTouched();
    return;
  }

  this.dadosResumo = this.forms.value;
  this.mostrarModal = true;
}

}



import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [ReactiveFormsModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {



  editIndex: number | null = null;

  private fb= inject(FormBuilder);

  form = this.fb.group({
    nome: ['', Validators.required],
    telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
    email: ['', [Validators.required, Validators.email]],
    contatos: this.fb.array([])
  });

  get contatos(): FormArray {
    return this.form.get('contatos') as FormArray;
  }


  getContato(index: number): FormGroup<any> {
  return this.contatos.at(index) as FormGroup;
  }

  inserir() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.contatos.push(
      this.fb.group({
        nome: [this.form.value.nome],
        telefone: [this.form.value.telefone],
        email: [this.form.value.email]
      })
    );

    this.form.patchValue({
      nome: '',
      telefone: '',
      email: ''
    });
  }

  excluir(index: number) {
    if (confirm('Deseja excluir este contato?')) {
      this.contatos.removeAt(index);
    }
  }

  editar(index: number) {
    this.editIndex = index;
  }

  salvarEdicao(index: number) {
    this.editIndex = null;
  }

  cancelar() {
    this.editIndex = null;
  }
}

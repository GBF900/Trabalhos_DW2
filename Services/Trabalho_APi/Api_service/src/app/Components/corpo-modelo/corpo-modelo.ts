import { Component, inject, OnInit, signal } from '@angular/core';
import { Usuario, UsuarioAleatorioService } from '../../Servicos/UsuarioAleatorioService';

@Component({
  selector: 'app-corpo-modelo',
  imports: [],
  templateUrl: './corpo-modelo.html',
  styleUrl: './corpo-modelo.css',
})
export class CorpoModelo implements OnInit{

usuario = signal<Usuario>({} as Usuario);

#usuarioServiceGenerator= inject(UsuarioAleatorioService)

ngOnInit(): void {
  this.carregarUsuario();
}

carregarUsuario() {

  this.#usuarioServiceGenerator.getUsuario().subscribe({
    next: (res) => {
      this.usuario.set(res);

    },

    error: (err) => {
      console.error(err);
    }
  });

}

}
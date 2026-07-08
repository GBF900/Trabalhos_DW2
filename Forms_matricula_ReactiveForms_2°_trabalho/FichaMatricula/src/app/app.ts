import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./Components/cabecalho/cabecalho";
import { Ficha } from "./Components/ficha/ficha";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Ficha],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FichaMatricula');
}

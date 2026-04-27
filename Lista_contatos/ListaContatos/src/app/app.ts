import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Agenda } from "./Componets/agenda/agenda";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Agenda],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ListaContatos');
}

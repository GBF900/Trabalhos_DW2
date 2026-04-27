import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./Components/cabecalho/cabecalho";
import { Forms } from "./Components/forms/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Forms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Forms_reactive');
}

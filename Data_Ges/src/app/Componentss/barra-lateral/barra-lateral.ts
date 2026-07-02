import { Component, Input } from '@angular/core';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-barra-lateral',
  imports: [RouterLinkActive],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.css',
})
export class BarraLateral {

  @Input()
  aberto = true;

}

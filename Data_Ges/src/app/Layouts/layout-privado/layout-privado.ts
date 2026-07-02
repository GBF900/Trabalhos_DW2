import { Component } from '@angular/core';
import { BarraLateral } from '../../Componentss/barra-lateral/barra-lateral';
import { Cabecalho } from '../../Componentss/cabecalho/cabecalho';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout-privado',
  imports: [Cabecalho, BarraLateral, RouterOutlet],
  templateUrl: './layout-privado.html',
  styleUrl: './layout-privado.css',
})
export class LayoutPrivado {
 menuAberto = true;

    alternarMenu(){

        this.menuAberto = !this.menuAberto;

    }
}

import { Component } from '@angular/core';
import { Cabecalho } from '../../Componentss/cabecalho/cabecalho';
import { BarraLateral } from '../../Componentss/barra-lateral/barra-lateral';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-publico',
  imports: [ RouterOutlet],
  templateUrl: './layout-publico.html',
  styleUrl: './layout-publico.css',
})
export class LayoutPublico {

}

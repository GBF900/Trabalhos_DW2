import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Cabecalho } from "../../Components/cabecalho/cabecalho";

@Component({
  selector: 'app-layout-publico',
  imports: [RouterOutlet, Cabecalho],
  templateUrl: './layout-publico.html',
  styleUrl: './layout-publico.css',
})
export class LayoutPublico {

}

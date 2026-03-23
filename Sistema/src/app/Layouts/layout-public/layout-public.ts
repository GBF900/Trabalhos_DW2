import { Component } from '@angular/core';
import {  RouterOutlet} from '@angular/router';
import { Cabecalho } from "../../Components/cabecalho/cabecalho";

@Component({
  selector: 'app-layout-public',
  imports: [RouterOutlet, Cabecalho],
  templateUrl: './layout-public.html',
  styleUrl: './layout-public.css',
})

export class LayoutPublic {

}

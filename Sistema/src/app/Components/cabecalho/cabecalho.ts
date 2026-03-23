import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

constructor(public router: Router) {}

isRotaAtiva(rota: string): boolean {
  return this.router.url == rota;
}


}

import { Component, EventEmitter, Output } from '@angular/core';
import { TokenService } from '../../Services/token-service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-cabecalho',
  imports: [RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {

  @Output()
  menuToggle = new EventEmitter<void>();

  constructor(private tokenService: TokenService, private router: Router) { }

  abrirMenu(): void {
    this.menuToggle.emit();
  }

  logout(): void {

    this.tokenService.logOut();

    this.router.navigate(['/login']);

  }

}

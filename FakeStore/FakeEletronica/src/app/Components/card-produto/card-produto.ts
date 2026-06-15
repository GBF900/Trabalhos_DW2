import { Component, Input } from '@angular/core';
import { Produto } from '../../Servicos/produto-service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-produto',
  imports: [CurrencyPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto {
 @Input()
  produto!: Produto;

  constructor(private router: Router) {}

  abrirProduto(): void {
    this.router.navigate(['/produto',this.produto.id]);

  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListaProdutos, Produto } from '../../ListaProdutos';


@Component({
  selector: 'app-corpo-prod',
  imports: [RouterLink,CommonModule],
  templateUrl: './corpo_prod.html',
  styleUrl: './corpo_prod.css',
})

export class CorpoProd {

  produtos: Produto[] = [];
  produtoSelecionado: any;
  
  constructor(private route:ActivatedRoute,
    private service: ListaProdutos ) {}

  ngOnInit() {
    this.produtos = this.service.getProdutos();
    this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.produtoSelecionado = this.service.getProdutoPorId(id);
  });
  
}

}

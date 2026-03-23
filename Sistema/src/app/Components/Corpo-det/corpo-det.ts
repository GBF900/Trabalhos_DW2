import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListaProdutos,Produto } from '../../ListaProdutos';

@Component({
  selector: 'app-corpo-det',
  imports: [RouterLink],
  templateUrl: './corpo-det.html',
  styleUrl: './corpo-det.css',
})
export class CorpoDet {
   produto:any;

  constructor(
    private route: ActivatedRoute,
    private service: ListaProdutos
  ) {}


  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.produto = this.service.getProdutoPorId(id);
  });
}

}

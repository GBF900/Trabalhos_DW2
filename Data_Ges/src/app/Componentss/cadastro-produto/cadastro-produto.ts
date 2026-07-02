import { Component, inject, OnInit } from '@angular/core';
import { PodeSair } from '../../Guards/can-deactive-guard';
import { Categoria } from '../../Models/categoria';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../Services/produto-service';
import { CategoriaService } from '../../Services/categoria-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-produto.html',
  styleUrl: './cadastro-produto.css',
})
export class CadastroProduto implements OnInit, PodeSair{

    categorias:Categoria[]=[];

    modoEdicao=false;

    idProduto=0;

    #fb = inject(FormBuilder)

    formulario=this.#fb.group({

        title:['',Validators.required],

        price:[0,Validators.required],

        description:['',Validators.required],

        image:['',Validators.required],

        category:['',Validators.required]

    });

    constructor(  private produtosService:ProdutoService, private categoriasService:CategoriaService,
        private router:Router,
        private route:ActivatedRoute
    ){}

    ngOnInit():void{

        this.carregarCategorias();

        const id=this.route.snapshot.paramMap.get('id');

        if(id){

            this.modoEdicao=true;

            this.idProduto=Number(id);

            this.carregarProduto();

        }

    }

    carregarCategorias(){

        this.categoriasService.listar().subscribe({

            next:(res: Categoria[])=>this.categorias=res

        });

    }

    carregarProduto(){

        this.produtosService.buscar(this.idProduto)

        .subscribe({

            next:(produto: { title: any; price: any; description: any; images: any[]; category: { id: { toString: () => any; }; }; })=>{

                this.formulario.patchValue({

                    title:produto.title,

                    price:produto.price,

                    description:produto.description,

                    image:produto.images[0],

                    category:produto.category.id.toString()

                });

            }

        });

    }

    salvar(){

        if(this.formulario.invalid){

            this.formulario.markAllAsTouched();
            return;
        }

        alert(this.modoEdicao? "Produto alterado":"Produto cadastrado ");

        this.formulario.markAsPristine();

        this.router.navigate(['/produtos']);

    }

    cancelar(){
        this.router.navigate(['/produtos']);

    }

    podeSair():boolean{

        if(this.formulario.dirty){

        return confirm("Existem alterações não salvas.\nDeseja realmente sair?");
      }
        return true;
    }

}

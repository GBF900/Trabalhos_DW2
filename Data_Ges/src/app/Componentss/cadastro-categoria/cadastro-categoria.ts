import { Component, inject } from '@angular/core';
import { Categoria } from '../../Models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../Services/categoria-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-categoria',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-categoria.html',
  styleUrl: './cadastro-categoria.css',
})
export class CadastroCategoria {
  modoEdicao = false;

  idCategoria = 0;

   #fb = inject(FormBuilder)
   

  formulario = this.#fb.group({

    name: ['', Validators.required],

    image: ['', Validators.required]

  });

  constructor(
    private categoriasService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{

    const id = this.route.snapshot.paramMap.get('id');

    if(id){

      this.modoEdicao = true;

      this.idCategoria = Number(id);

      this.carregarCategoria();

    }

  }

  carregarCategoria(): void{

    this.categoriasService.buscar(this.idCategoria).subscribe({

      next: (categoria: Categoria)=>{

        this.formulario.patchValue({

          name: categoria.name,

          image: categoria.image

        });

      }

    });

  }

  salvar(): void{

    if(this.formulario.invalid){

      this.formulario.markAllAsTouched();

      return;

    }

    alert(this.modoEdicao ? 'Categoria alterada ' :'Categoria cadastrada ');

    this.formulario.markAsPristine();

    this.router.navigate(['/categorias']);

  }

  cancelar(): void{

    this.router.navigate(['/categorias']);

  }

  podeSair(): boolean{

    if(this.formulario.dirty){

      return confirm('Existem alterações não salvas. Deseja sair?');
    }

    return true;

  }

}

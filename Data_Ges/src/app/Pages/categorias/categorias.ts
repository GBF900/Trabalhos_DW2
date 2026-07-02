import { Component } from '@angular/core';
import { Categoria } from '../../Models/categoria';
import { CategoriaService } from '../../Services/categoria-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  imports: [FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
 categorias: Categoria[] = [];

  categoriasFiltradas: Categoria[] = [];

  pesquisa = '';

  carregando = false;

  constructor(
    private categoriasService: CategoriaService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.listarCategorias();

  }

  listarCategorias(): void{

    this.carregando = true;

    this.categoriasService.listar().subscribe({

      next: (resposta: Categoria[]) =>{

        this.categorias = resposta;

        this.categoriasFiltradas = resposta;

      },

      complete: ()=>{

        this.carregando = false;

      }

    });

  }

  filtrar(): void{

    const texto = this.pesquisa.toLowerCase();

    this.categoriasFiltradas = this.categorias.filter(categoria =>

      categoria.name.toLowerCase().includes(texto)

    );

  }

  editar(categoria: Categoria): void{

    this.router.navigate(['/categorias', categoria.id]);

  }

  excluir(categoria: Categoria): void{

    const confirmar = confirm(`Deseja excluir "${categoria.name}"?`);

    if(confirmar){
      alert("Categoria excluída (Simulação)");
    }

  }
}

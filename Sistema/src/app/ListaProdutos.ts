import { Injectable } from '@angular/core';

export type Produto={
  id:number;
  nome:string;
  preco:number;
  detail:string;  
}

@Injectable({
  providedIn: 'root',
})
export class ListaProdutos {
  
  produtos:Produto[]=[
    {
    id: 1,
    nome: 'Laranja',
    preco:2.39,
    detail: 'A laranja é rica em vitamina C, auxilia na imunidade, possui fibras que ajudam na digestão e antioxidantes que combatem o envelhecimento celular.'
  },
  {
    id: 2,
    nome: 'Maçã',
    preco:3.39,
    detail: 'A maçã é fonte de fibras e antioxidantes, ajuda no controle do colesterol e contribui para a saúde do sistema digestivo.'
  },
  {
    id: 3,
    nome: 'Banana',
    preco:2.99,
    detail: 'A banana é rica em potássio, importante para os músculos e o coração, além de fornecer energia rápida e auxiliar no funcionamento intestinal.'
  },
  {
    id: 4,
    nome: 'Mamão',
    preco:4.29, 
    detail: 'O mamão contém enzimas digestivas, como a papaína, que auxiliam na digestão, além de ser rico em fibras e vitamina A.'
  },
  {
    id: 5,
    nome: 'Abacate',
    preco:5.39, 
    detail: 'O abacate é rico em gorduras boas, que ajudam na saúde cardiovascular, além de conter vitaminas e minerais importantes.'
  },
  {
    id: 6,
    nome: 'Morango',
    preco:6.99,
    detail: 'O morango é rico em antioxidantes e vitamina C, ajudando na imunidade e na saúde da pele.'
  },
  {
    id: 7,
    nome: 'Uva',
    preco:2.09,  
    detail: 'A uva possui antioxidantes como o resveratrol, que auxiliam na saúde do coração e na prevenção de doenças.'
  },
  {
    id: 8,
    nome: 'Melancia',
    preco:5.09,  
    detail: 'A melancia é altamente hidratante, rica em água e vitaminas, ajudando na hidratação do corpo.'
  },
  {
    id: 9,
    nome: 'Melão',
    preco:2.55,  
    detail: 'O melão é leve, refrescante e rico em vitaminas, contribuindo para a hidratação e o bom funcionamento do organismo.'
  },
  {
    id: 10,
    nome: 'Cenoura',
    preco:3.33,  
    detail: 'A cenoura é rica em betacaroteno, importante para a saúde dos olhos e da pele.'
  },
  {
    id: 11,
    nome: 'Brócolis',
    preco:2.79,  
    detail: 'O brócolis é rico em fibras, vitaminas e antioxidantes, ajudando na prevenção de doenças e fortalecendo o sistema imunológico.'
  },
  {
    id: 12,
    nome: 'Espinafre',
    preco:2.29,  
    detail: 'O espinafre contém ferro, vitaminas e antioxidantes, contribuindo para a saúde do sangue e do sistema imunológico.'
  },
  {
    id: 13,
    nome: 'Tomate',
    preco:6.99,  
   detail: 'O tomate é rico em licopeno, um antioxidante que auxilia na saúde do coração e na prevenção de doenças.'
  },
  {
    id: 14,
    nome: 'Batata',
    preco:6.39,  
    detail: 'A batata é uma boa fonte de carboidratos, fornecendo energia e contribuindo para o funcionamento do organismo.'
  },
  {
    id: 15,
    nome: 'Arroz',
    preco:2.29,  
    detail: 'O arroz é uma fonte importante de energia, rico em carboidratos e base alimentar em diversas dietas.'
  },
  {
    id: 16,
    nome: 'Feijão',
    preco:2.39,  
    detail: 'O feijão é rico em proteínas, ferro e fibras, essencial para uma alimentação equilibrada.'
  },
  {
    id: 17,
    nome: 'Ovo',
    preco:3.00,  
    detail: 'O ovo é uma excelente fonte de proteínas de alta qualidade, vitaminas e minerais importantes para o corpo.'
  },
  {
    id: 18,
    nome: 'Leite',
    preco:5.50,  
    detail: 'O leite é rico em cálcio, essencial para a saúde dos ossos e dentes, além de fornecer proteínas.'
  },
  {
    id: 19,
    nome: 'Queijo',
    preco:6.00,  
    detail: 'O queijo é fonte de cálcio e proteínas, contribuindo para a saúde óssea e muscular.'
  },
  {
    id: 20,
    nome: 'Peito de Frango',
    preco:7.99,  
    detail: 'O peito de frango é rico em proteínas magras, ideal para manutenção e crescimento muscular.'
  }  
  ];

  getProdutos() {
    return this.produtos;
  }

  getProdutoPorId(id: number) {
    return this.produtos.find(p => p.id === id);
  }

}

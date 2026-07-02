import { Categoria } from "./categoria";

export interface Produto {

  id: number;

  title: string;

  slug: string;

  price: number;

  description: string;

  images: string[];

  creationAt: string;

  updatedAt: string;

  category: Categoria;

}
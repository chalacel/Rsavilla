import { Injectable } from '@angular/core';
import * as uuid  from 'uuid';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  products: Product[] = [
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/cabecera_cama_1.png",
      name: "Producto 1"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_2.png",
      name: "Producto 2"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_3.png",
      name: "Producto 3"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_4.png",
      name: "Producto 4"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_5.png",
      name: "Producto 5"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_6.png",
      name: "Producto 6"
    },
    {
      id: uuid.v4(),
      category: "Camas",
      url: "../../assets/images/portfolio/Cabecera_cama_7.png",
      name: "Producto 7"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_1.png",
      name: "Producto 8"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_2.png",
      name: "Producto 9"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_3.png",
      name: "Producto 10"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_4.png",
      name: "Producto 11"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_5.png",
      name: "Producto 12"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_6.png",
      name: "Producto 13"
    },
    {
      id: uuid.v4(),
      category: "Comedores",
      url: "../../assets/images/portfolio/comedor_7.png",
      name: "Producto 14"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_1.png",
      name: "Producto 15"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_2.png",
      name: "Producto 16"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_3.png",
      name: "Producto 17"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_4.png",
      name: "Producto 18"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_5.png",
      name: "Producto 19"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_6.png",
      name: "Producto 20"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_7.png",
      name: "Producto 21"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_8.png",
      name: "Producto 22"
    },
    {
      id: uuid.v4(),
      category: "Muebles",
      url: "../../assets/images/portfolio/mueble_9.png",
      name: "Producto 23"
    }
  ];

  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(product => product.category === category);
  }
}

import { Component } from '@angular/core';
import * as uuid  from 'uuid';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cart: Cart = {
    totalProducts: 0,
    products: {}
  };

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

  addProduct(product: Product) {
    const currentCount = this.cart.products[product.id]?.count ?? 0;
    this.cart.products[product.id] = {
      count: currentCount + 1,
      ...product
    };
    this.cart.totalProducts += 1;
  }

  removeProduct(product: Product) {
    const currentCount = this.cart.products[product.id]?.count ?? 0;
    const nextCount = currentCount - 1;
    if(nextCount == 0) {
      delete this.cart.products[product.id];
    } else {
      this.cart.products[product.id] = {
        count: nextCount,
        ...product
      }
    }
    this.cart.totalProducts -= 1;
  }
}


interface Product {
  id: string;
  category: string;
  url: string;
  name: string;
}

interface Cart {
  totalProducts: number;
  products: Record<string, CartItem | undefined>
}

interface CartItem {
  id: string;
  category: string;
  url: string;
  name: string;
  count?: number;
}
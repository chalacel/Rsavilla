import { Component, ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { PortfolioService } from './portfolio.service';
import { Cart } from './models/cart';
import { Product } from './models/product';

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

  onDestroy$: Subject<void> = new Subject();
  search$: Subject<string> = new Subject();

  products: Product[] = [];

  categories: string[] = ["Todos los productos", "Camas", "Muebles", "Comedores"];

  @ViewChild("dv") dataView?: DataView;

  constructor(
    private readonly service: PortfolioService,
  ) {
    this.service.getAllProducts().then((products) => {
      this.products = products;
    });
    this.search$
    .pipe(
      takeUntil(this.onDestroy$),
      debounceTime(300),
    )
    .subscribe((search) => {
      this.dataView?.filter(search);
    });
  }

  async filterByCategory(event: { originalEvent: PointerEvent, value: string }) {
    console.log(event.value);
    if(event.value == "Todos los productos") {
      this.products = await this.service.getAllProducts();
      return;
    }
    this.products = await this.service.getProductsByCategory(event.value);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

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

  handleSearchInput(event: any) {
    const value = event.target.value;
    this.search$.next(value);
  }
}

import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 10,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  save(product: Product) {
    this.products.push(product);
  }


  findById(id: number): Product {
    return this.products.filter(it => it.id === id)[0];
  }

  update(product: Product) {
    this.products.forEach(it => {
      if (it.id === product.id) {
        it.name = product.name;
        it.price = product.price;
        it.description = product.description;
      }
    });
  }

  deleteProduct(id: number) {

    this.products = this.products.filter(item => item.id !== id);
  }
}

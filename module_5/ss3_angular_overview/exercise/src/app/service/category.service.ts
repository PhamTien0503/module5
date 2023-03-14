import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  private API = 'http://localhost:3000/categories';


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API);
  }

  saveCategory(category) {
    this.categories.push(category);
  }

  findById(id: number) {
    return this.categories.find(category => category.id === id);
  }

  updateCategory(id: number, category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }
}

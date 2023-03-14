import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
const API_URL = `http://localhost:3000/todos`;
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL);
  }

  saveTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL, todo);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(API_URL + '/' + id, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(API_URL + '/' + id);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(API_URL + '/' + id);
  }
}

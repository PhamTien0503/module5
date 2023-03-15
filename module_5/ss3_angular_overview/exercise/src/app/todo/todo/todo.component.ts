import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../../model/todo';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.showAllTodo();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(() => {
        this.showAllTodo();
      }, e => {
        console.log(e);
      });
      this.content.reset();
    }
  }
  showAllTodo() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }


  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.showAllTodo();
      alert('Xóa thành công');
    }, e => {
      console.log(e);
    });
  }
}


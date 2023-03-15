import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {Todo} from '../../model/todo';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  id: number;
  todoUpdate: Todo;
  todoForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get('id'), 10);
      this.todoService.findById(this.id).subscribe(next => {
        this.todoUpdate = next;
        this.todoForm = new FormGroup({
          id: new FormControl(this.todoUpdate.id),
          content: new FormControl((this.todoUpdate.content)),
          complete: new FormControl(this.todoUpdate.complete),
        });
      });
    });
  }

  updateTodo() {
    const todo: Todo = this.todoForm.value;
    this.todoService.updateTodo(this.id, todo).subscribe(next => {
        alert('Update success!!');
        this.router.navigateByUrl('/todos/list');
      }
    );
  }
}

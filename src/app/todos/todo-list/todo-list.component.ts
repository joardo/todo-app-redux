import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []
  filtro: filtrosValidos = 'todos';

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe( todos => this.todos = todos);
    // this.store.select('filtro').subscribe( filtro => this.filtro = filtro);
    this.store.subscribe( ({todos, filtro}) => {
      this.todos = todos;
      this.filtro = filtro;
    });
  }

}

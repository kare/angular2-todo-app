import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}

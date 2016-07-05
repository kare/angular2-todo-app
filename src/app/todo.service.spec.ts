/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('#getAllTodos()', () => {
  beforeEachProviders(() => [TodoService]);

  it('should return an empty array by default',
      inject([TodoService], (service: TodoService) => {
    expect(service.getAllTodos()).toEqual([]);
  }));
  it('should return all todos',
      inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', completed: false});
    let todo2 = new Todo({title: 'Hello 2', completed: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));
});

describe('#addTodo(todo)', () => {
  beforeEachProviders(() => [TodoService]);

  it('should automatically assign an incrementing id',
      inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', completed: false});
    let todo2 = new Todo({title: 'Hello 2', completed: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getTodoById(1)).toEqual(todo1);
    expect(service.getTodoById(2)).toEqual(todo2);
  }));
});

describe('#deleteTodoById(id)', () => {
  beforeEachProviders(() => [TodoService]);

  it('should remove todo with corresponding id',
      inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', completed: false});
    let todo2 = new Todo({title: 'Hello 2', completed: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodoById(1);
    expect(service.getAllTodos()).toEqual([todo2]);
    service.deleteTodoById(2);
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should not removing anything if todo with corresponding id is not found', inject([TodoService], (service: TodoService) => {
    let todo1 = new Todo({title: 'Hello 1', complete: false});
    let todo2 = new Todo({title: 'Hello 2', complete: true});
    service.addTodo(todo1);
    service.addTodo(todo2);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
    service.deleteTodoById(3);
    expect(service.getAllTodos()).toEqual([todo1, todo2]);
  }));
});

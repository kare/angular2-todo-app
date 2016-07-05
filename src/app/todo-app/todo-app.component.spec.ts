/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodoAppComponent } from './todo-app.component';
import {TodoService} from '../todo.service';

describe('Component: TodoApp', () => {
  it('should create an instance', () => {
    let component = new TodoAppComponent(new TodoService());
    expect(component).toBeTruthy();
  });
});

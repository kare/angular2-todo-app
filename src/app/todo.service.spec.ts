/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('Todo Service', () => {
  beforeEachProviders(() => [TodoService]);

  it('should ...',
      inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});

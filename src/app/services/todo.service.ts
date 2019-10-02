import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() { }
  addTodo(newTodo: Todo) {
    this.todos.push(newTodo)
  }
  deleteTodo(item: Todo) {
    const index = this.todos.indexOf(item)
    this.todos.splice(index, 1)
  }
  getTodos() {
    return this.todos
  }
}
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ITodo[] = [];
  constructor() { }
  addTodo(newTodo: ITodo) {
    this.todos.push(newTodo)
  }
  deleteTodo(item: ITodo) {
    const index = this.todos.indexOf(item)
    this.todos.splice(index, 1)
  }
  getTodos() {
    return this.todos
  }
}
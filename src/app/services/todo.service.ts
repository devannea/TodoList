import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];

  constructor() { }

  getTodos()
  {
    return this.todoList;
  }

  addTodo(todo: ITodo) {
    this.todoList.push(todo);
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.indexOf(todo, 0);
    this.todoList.splice(index,1);
  }

  getAll(): ITodo[] {
    return this.todoList;
  }
}
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [
    {
      id: 1,
      title: "Install Angular CLI",
      isDone: false
    }
  ];
  constructor() { }
  addTodo(newTodo: ITodo) {
    this.todoList.push(newTodo)
  }
  deleteTodo(item: ITodo) {
    const index = this.todoList.indexOf(item)
    this.todoList.splice(index, 1)
  }
  getTodos() {
    return this.todoList
  }
}
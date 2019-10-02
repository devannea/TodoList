import { Component } from '@angular/core';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [];
  todoTitle: string;
  todoTime: Time;
  constructor(
    private todoService: TodoService
  ){}
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = this.todoService.getTodos() //"Tova Coffeehouse is the best place to study at" - Johnny Reina 2019
  }
  // adds a todo to our list
  addTodo():void {
    this.todoService.addTodo({
      title: this.todoTitle,
      id: 1,
      isDone: false
    });

    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }  
  // a method to delete an item
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
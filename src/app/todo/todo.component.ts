import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/ITodo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = "Todos";
  todoTitle: string = "";
  todoId: number = 1;
  todoList: ITodo[] = [];
  status: string = "";

  constructor(
    private activatedroute: ActivatedRoute,
    private TodoService: TodoService
  ) {}

  ngOnInit() {
    this.todoList = this.TodoService.todoList;
    this.activatedroute.paramMap.subscribe(params => {
      this.status = params.get("status");
    })
  }

  get filteredArray(): ITodo[] {
    if (!this.status) {
      return this.TodoService.todoList;
    } else {
      return this.TodoService.todoList.filter(x => this.status === "done" ? x.isDone : !x.isDone);
    }
  }

  addTodo(): void {
    this.todoId++;

    const newTodo: ITodo = {
      id: this.todoId,
      title: this.todoTitle,
      isDone: false,
    }
  }

}

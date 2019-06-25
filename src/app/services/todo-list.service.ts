import { Injectable } from '@angular/core';
import { ITodoItem } from '../models/todo-item.interface'
import { todoList } from '../mock-todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Array<ITodoItem>;

  constructor() {
    this.todoList = todoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addTodoItem(task: string) {
    this.todoList.push({
      id: this.todoList.length + 1,
      name: task,
      status: false
    });
  }
}

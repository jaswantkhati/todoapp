import { Injectable, EventEmitter } from '@angular/core';
import { ITodoItem } from '../models/todo-item.interface'
import { todoList } from '../mock-todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Array<ITodoItem>;
  id: number;
  emitStatusChange: EventEmitter<any> = new EventEmitter<any>();

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

  deleteTodoitem(id) {
    this.todoList = this.todoList.filter((listItem) => listItem.id !== id);
    return this.todoList;
  }

  emitChanges() {
    this.emitStatusChange.emit(null);
  }

  getTaskById(id) {
    return this.todoList.find(todoItem => todoItem.id === id);
  }
  
  updateData(taskName, id) {
    this.todoList.forEach(taskItem => {
      if (taskItem.id === id) {
        taskItem.name = taskName;
      }
    });
  }
}

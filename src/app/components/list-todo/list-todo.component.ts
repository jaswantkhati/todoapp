import { Component, OnInit } from '@angular/core';
import { todoList } from 'src/app/mock-todo-list';
import { TodoItem } from 'src/app/models/todo-item.interface';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  list: Array<TodoItem>;
   
  constructor() {
    this.list = todoList;
   }

  ngOnInit() {

  }

}

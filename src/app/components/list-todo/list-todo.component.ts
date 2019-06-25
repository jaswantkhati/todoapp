import { Component, OnInit } from '@angular/core';
import { todoList } from 'src/app/mock-todo-list';
import { ITodoItem } from 'src/app/models/todo-item.interface';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  list: Array<ITodoItem>;
   
  constructor() {
    this.list = todoList;
   }

  ngOnInit() {

  }

}

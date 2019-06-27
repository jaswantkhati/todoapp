import { Component, OnInit, EventEmitter } from '@angular/core';
import { todoList } from 'src/app/mock-todo-list';
import { ITodoItem } from 'src/app/models/todo-item.interface';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  list: Array<ITodoItem>;
  emitter: EventEmitter<any> = new EventEmitter<any>();
  filtertype: string = "all";

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.list = this.todoListService.getTodoList();
  }

  filter(type) {
    this.filtertype = type;
    switch (type) {
      case 'completed':
        this.getTodoList();
        this.list = this.list.filter((task) => task.status);
        break;
      case 'remaining':
        this.getTodoList();
        this.list = this.list.filter(task => !task.status)
        break;
      case 'all':
        this.getTodoList();
        break;
    }
  }

  delete(id) {
    this.list = this.todoListService.deleteTodoitem(id);
  }

  emitEvent() {
    setTimeout(()=>{
      this.filter(this.filtertype);
      this.todoListService.emitChanges();
    })
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component implements OnInit, OnDestroy {

  remaining;
  subs: Subscription;
   todoList: any;
  constructor(private todoListService: TodoListService) {
    this.subs = this.todoListService.emitStatusChange.subscribe(e => {
      this.checkRemaining();
    });
  }

 ngOnInit() {
    this.checkRemaining();
  }

  checkRemaining() {
    this.todoList = this.todoListService.getTodoList();
    this.remaining = this.todoList.filter(task => !task.status).length;
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}

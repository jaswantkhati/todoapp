import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import{ Location} from "@angular/common"

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private todoListService: TodoListService,
    private location : Location
  ) { }

  ngOnInit() {
  }

  addTodoItem(formData) {
    console.log(formData);
    
    this.todoListService.addTodoItem(formData.taskName);
  }
  getBack():void{
    this.location.back();
  }

}

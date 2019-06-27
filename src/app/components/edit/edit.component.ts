import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common"
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  listName: string;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private todoListServices: TodoListService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.getTaskById(id);
 }

  getTaskById(id) {
    const list = this.todoListServices.getTaskById(id);
    this.listName = list.name;  }
     getBack(): void {
    this.location.back();
  }

  editTodoItem(formData) {
  this.todoListServices.updateData(formData.taskName, +this.route.snapshot.paramMap.get("id"));
  this.getBack();
  }

}

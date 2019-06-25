import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "show-list",
    pathMatch: "full"
  },
  {
    path: "show-list",
    component: ListTodoComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

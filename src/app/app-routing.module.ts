import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { EditComponent } from './components/edit/edit.component'

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
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

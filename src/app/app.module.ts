import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { Todo2Component } from './components/todo2/todo2.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTodoComponent,
    Todo2Component,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

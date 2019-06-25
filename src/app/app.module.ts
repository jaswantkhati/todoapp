import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    AddTodoComponent
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

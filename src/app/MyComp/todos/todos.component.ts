import { Component, OnInit } from '@angular/core';
import { Todo } from "../../todos"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localData:any;
  constructor() {
    this.localData=localStorage.getItem('todos');
    if(this.localData==null)
    {
      this.todos=[];
    }
    else{
      this.todos =JSON.parse(this.localData)
    }
    
  }

  ngOnInit(): void {
  }
  deleteTodo(item: Todo) {
    const index = this.todos.indexOf(item);
    // console.log(index)
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  checkBox(data:Todo)
  {
    console.log(data)
  }

}

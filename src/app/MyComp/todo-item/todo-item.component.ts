import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from 'src/app/todos';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() val:Todo | any
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoChecked:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(data:Todo)
  {
    this.todoDelete.emit(data)
    // console.log(data)
    // console.log("onclickmethos from todo-items",data)
  }
  onCheckBoxed(val:Todo)
  { 
    let a=this.todoChecked.emit(val)
  }

}

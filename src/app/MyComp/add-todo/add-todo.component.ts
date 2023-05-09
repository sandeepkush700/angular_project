import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/todos';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoadd: EventEmitter<Todo> = new EventEmitter()
  title:string|any
  desc:string|any
  localData: any
  profileForm: FormGroup | any
  constructor(private route: Router) {
  }

  ngOnInit(): void {


    // for patch value method 

  //   this.profileForm = new FormGroup({
  //     title: new FormControl(""),
  //     desc: new FormControl("")
  //   });

  //   this.localData = localStorage.getItem("data");
  //  if(this.localData==null)
  //  [
  //   this.localData={}
  //  ]
  //  else{
  //   this.profileForm.patchValue({
  //     title: JSON.parse(this.localData).title,
  //     desc: JSON.parse(this.localData).desc
  //   });
  //   localStorage.removeItem("data")
  //  }

  }
  onSubmit() {
    const todo={
      Sno:4,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoadd.emit(todo)

    // for patch value 

    // if (this.profileForm.value) {
    //   localStorage.setItem("data", JSON.stringify(this.profileForm.value));
    //   this.route.navigate(['content'])
    // }
    // return
  }

}

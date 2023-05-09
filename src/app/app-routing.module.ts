import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { AddTodoComponent} from './MyComp/add-todo/add-todo.component'

const routes: Routes = [
  {path:"content",component:ContentPageComponent},
  {path:"add_item",component:AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

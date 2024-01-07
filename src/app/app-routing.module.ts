import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { ShowTodosComponent } from './components/show-todos/show-todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{path:"",redirectTo:"todos",pathMatch:"full"},
{path:"todos",component:TodosComponent,title:"Add Todos"},
{path:"showTodos",component:ShowTodosComponent,title:"show-todos"},

  {path:"**",component:NotFoundComponent,title:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

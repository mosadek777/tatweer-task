import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/interfaces/task';

import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  taskArray: Task[] = [];
  constructor(private _tasksService: TasksService,private toaster:ToastrService, private _router:Router) {

  }
  todoList: FormGroup<any> = new FormGroup({
    taskName: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(11),
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(11),
      Validators.required,
    ]),
    dueDateFrom: new FormControl('', [Validators.required]),
    dueDateTo: new FormControl('', [Validators.required]),
    priority: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(11),
      Validators.required,
    ]),
    isCompleted:new FormControl(false)
  });

  addTask(todoList: any) {
    this.taskArray = this._tasksService.tasksArray;
    this.taskArray.push(todoList.value);
    localStorage.setItem('todos', JSON.stringify(this.taskArray));
this.toaster.success("todo added successfully")
this._router.navigate(["/showTodos"])

  }

  checkLocalStorage() {
    if (localStorage.getItem('todos')) {
      this.taskArray = JSON.parse(localStorage.getItem('todos')||'{}');
    }
  }
}

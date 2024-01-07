import { Injectable } from '@angular/core';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasksArray:Task[]=[]
  constructor() { }
    checkLocalStorage() {
    if (localStorage.getItem('todos') ||'{}') {
      this.tasksArray = JSON.parse(localStorage.getItem("todos")||'{}');
    }
  }
}

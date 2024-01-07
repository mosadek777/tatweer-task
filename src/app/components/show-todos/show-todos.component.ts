import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-show-todos',
  templateUrl: './show-todos.component.html',
  styleUrls: ['./show-todos.component.scss'],
})
export class ShowTodosComponent implements OnInit , OnChanges {
  tasks: Task[] = [];
  value = '';
  dateValue=""
   constructor(private _tasksService: TasksService) {
    _tasksService.checkLocalStorage()
    this.getAllTasks()
  }
  ngOnInit(): void {
    // this.getAllTasks();
    // console.log(this.getAllTasks);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.tasks=[...this._tasksService.tasksArray]
  }

  getAllTasks() {
    this.tasks = this._tasksService.tasksArray;
    
  }
  deleteNote(index:number){
   this.tasks.splice(index,1)
   this.getAllTasks()
   localStorage.setItem("todos",JSON.stringify(this.tasks))
   this.tasks=[...this._tasksService.tasksArray]

  
  }
isCompleted:boolean=false
updateStatus(index:number){
  this.isCompleted = !this.isCompleted
  console.log(`true`);
  this.changeButtonText()
   }

  //  not a solution but for test
  buttonText: string = 'isNotCompleted';
  changeButtonText(){
    this.buttonText = 'isCompleted'
    
  }
}

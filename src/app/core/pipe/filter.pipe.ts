import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any[], term: string): any[] {
   return todos.filter((todo)=>todo.taskName.toLowerCase().includes(term.toLowerCase()))
  }

}



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(todos: any[], term: string): any[] {
    return todos.filter((todo)=>todo.dueDateFrom.toLowerCase().includes(term.toLowerCase()))
   }

}

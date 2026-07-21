import { Todo, TodoStatus } from './types';
import { mapArray, filterArray, reduceArray } from './array-helpers';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  const newStatus = completed ? TodoStatus.COMPLETED : TodoStatus.PENDING;
  return mapArray(state, (todo) => ({...todo, status: newStatus}))
  //throw new Error('toggleAll: not implemented');
}

export function clearCompleted(state: Todo[]): Todo[] {
  return filterArray(state, todo => todo.status === TodoStatus.PENDING || todo.status === TodoStatus.IN_PROGRESS);
  //throw new Error('clearCompleted: not implemented');
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  return reduceArray(state, (count, todo) => {
    if(todo.status === status) {
      count++;
    }
    return count;
  }, 0)
  //throw new Error('countByStatus: not implemented');
}

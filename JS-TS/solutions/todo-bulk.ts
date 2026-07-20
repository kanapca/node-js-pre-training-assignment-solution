import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  return state.map(todo => ({
    ...todo, status: completed ? TodoStatus.COMPLETED : TodoStatus.PENDING
  }));
  //throw new Error('toggleAll: not implemented');
}

export function clearCompleted(state: Todo[]): Todo[] {
  let result: Todo[] = [];
  result = state.filter(todo => todo.status === TodoStatus.PENDING || todo.status === TodoStatus.IN_PROGRESS);
  return result;
  //throw new Error('clearCompleted: not implemented');
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  
  const result = state.reduce((count, todo) => {
    if(todo.status === status) {
      count++;
    }
    return count;
  }, 0)
  
  return result;
  //throw new Error('countByStatus: not implemented');
}

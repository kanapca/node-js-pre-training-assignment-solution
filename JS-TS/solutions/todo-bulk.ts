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
  throw new Error('countByStatus: not implemented');
}

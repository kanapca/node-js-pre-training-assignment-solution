import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {

  return [...state, todo];
  //throw new Error('addTodo: not implemented');
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  if(state == null || state == undefined) {
    throw new Error("Can't update todo that wasn't added/doesn't exist");
  }
  const result: Todo[] = [...state];
  for(let i in result) {
    if(result[i].id === id) {
      result[i] = {...result[i], ...update};
      return result;
    }
  }
  
  throw new Error(`Unexpected error`);
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  if(state == null || state == undefined) {
    throw new Error("Can't remove todo that wasn't added/doesn't exist");
  }
  const result: Todo[] = [...state];
  for(let i in result) {
    if(result[i].id === id) {
      
    }
  }
  throw new Error('removeTodo: not implemented');
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  const result: Todo[] = [];
  for(let i in state) {
    if(state[i].id === id) {
      result[0] = state[i];
      return result[0];
    }
  }
  return undefined;
  //throw new Error('getTodo: not implemented');
}

import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

export function createTodo(input: NewTodo): Todo {
  const todo: Todo = {
    title: input.title,
    description: input.description,
    status: TodoStatus.PENDING,
    id: nextId,
    createdAt: new Date()
  }

  nextId++;
  return todo;
}

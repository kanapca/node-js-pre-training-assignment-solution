import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    return this.api.add({title, description})
    //throw new Error('create: not implemented');
  }

  async toggleStatus(id: number): Promise<Todo> {
    throw new Error('toggleStatus: not implemented');
  }

  async search(keyword: string): Promise<Todo[]> {
    throw new Error('search: not implemented');
  }
}

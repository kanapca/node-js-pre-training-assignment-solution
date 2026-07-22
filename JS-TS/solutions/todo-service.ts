import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';
import { filterArray } from './array-helpers';

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
    const todos = await this.api.getAll();
    const lowerKeyword = keyword.toLowerCase();
  
    return filterArray(todos, todo => 
      todo.title.toLowerCase().includes(lowerKeyword) ||
      (todo.description?.toLowerCase().includes(lowerKeyword) || false)
    );
}
}

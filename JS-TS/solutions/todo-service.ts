import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';
import { filterArray } from './array-helpers';

export class TodoService {
  constructor(private readonly api: TodoApi) { }

  async create(title: string, description = ''): Promise<Todo> {
    return this.api.add({title, description})
  }

  async toggleStatus(id: number): Promise<Todo> {
    const todos = await this.api.getAll();
    const result = filterArray(todos, todo => todo.id === id);

    let newStatus: TodoStatus;
    switch(result[0].status) {
      case TodoStatus.COMPLETED: newStatus = TodoStatus.IN_PROGRESS; break;
      case TodoStatus.IN_PROGRESS: newStatus = TodoStatus.COMPLETED; break;
      case TodoStatus.PENDING: newStatus = TodoStatus.IN_PROGRESS; break;
      default: newStatus = TodoStatus.PENDING; break;
    }
    return this.api.update(id, {status: newStatus});
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

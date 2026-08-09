import { TodoService } from './todo-service';
import { TodoApi } from './todo-api';
import { Todo } from './types';

export class ToDoManager {
  private api = new TodoApi();
  private service = new TodoService(this.api);

  async init(): Promise<void> {
    this.service.create("Todo1", "The first todo");
    this.service.create("Todo2", "The second todo");
    this.service.create("Todo3");
    //throw new Error('init: not implemented');
  }

  async add(title: string, description = ''): Promise<void> {
    await this.service.create(title, description);
    //throw new Error('add: not implemented');
  }

  async complete(id: number): Promise<void> {
    await this.service.toggleStatus(id);
    //throw new Error('complete: not implemented');
  }

  async list(): Promise<Todo[]> {
    return await this.api.getAll();
    //throw new Error('list: not implemented');
  }
}

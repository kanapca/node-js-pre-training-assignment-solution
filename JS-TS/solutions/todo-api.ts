import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';
import { createTodo } from './todo-factory';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private item: Todo[] = [];
  private random = Math.random() * 300;

  async getAll(): Promise<Todo[]> {
    let random = Math.random() * 300;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([...this.item]);
      }, this.random)
    })
    //throw new Error('getAll: not implemented');
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.item.push(createTodo(newTodo));
        resolve(createTodo(newTodo))
      }, this.random)
    })
    //throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    throw new Error('update: not implemented');
  }

  async remove(id: number): Promise<void> {
    throw new Error('remove: not implemented');
  }

  
}

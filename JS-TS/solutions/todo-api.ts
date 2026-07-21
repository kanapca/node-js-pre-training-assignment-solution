import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';
import { createTodo } from './todo-factory';
import { updateTodo, removeTodo } from './todo-crud';
import { filterArray } from './array-helpers';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private item: Todo[] = [];
  private random = Math.random() * 300;


  async getAll(): Promise<Todo[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([...this.item]);
      }, this.random)
    });
    //throw new Error('getAll: not implemented');
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.item.push(createTodo(newTodo));
        resolve(createTodo(newTodo))
      }, this.random)
    });
    //throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    return new Promise(resolve => {
      setTimeout(() => {
        const updatedToDo = updateTodo(this.item, id, update);
        resolve(updatedToDo[0]);
      }, this.random)
    })
    //throw new Error('update: not implemented');
  }

  async remove(id: number): Promise<void> {
    //throw new Error('remove: not implemented');
  }

  
}

import { updateTodo, removeTodo } from './todo-crud';
import { filterArray } from './array-helpers'

export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    //throw new Error('add: not implemented');
    return this.items[this.items.length];
  }

  update(id: number, patch: Partial<T>): T {
    for(let i in this.items) {
      if(this.items[i].id === id) {
        this.items[i] = { ...this.items[i], ...patch}
        return this.items[i];
      }
    }
    //return { ...this.items[id], ...patch}
    throw new Error('Unexpected error');
  }

  remove(id: number): void {
    const index = this.items.findIndex(todo => todo.id === id);
    this.items.splice(index, 1);
    //this.items = removeTodo(this.items, id);
    //throw new Error('remove: not implemented');
  }

  findById(id: number): T | undefined {
    const result = filterArray(this.items, item => item.id === id);
    return result[0];
    //throw new Error('findById: not implemented');
  }

  findAll(): T[] {
    return [...this.items]
    //throw new Error('findAll: not implemented');
  }
}

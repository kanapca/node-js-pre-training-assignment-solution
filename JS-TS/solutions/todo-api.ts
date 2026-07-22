import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';
import { createTodo } from './todo-factory';
class TodoNotFoundError extends Error {
  constructor(id: number) {
    if(id < 0) super("Can't have a Todo with negative id");
    super(`Todo with id ${id} was not found`);
    this.name = "TodoNotFoundError";
  }
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private random = Math.random() * 300;

  isTodoFound(id: number) {
    let index = -1;
    let arr = this.repo.findAll();
    for(let i in arr) {
      if(arr[i].id == id) index = id;
    }
    if(index === -1) {
      throw new TodoNotFoundError(id);
    }
  }

  async getAll(): Promise<Todo[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.repo.findAll());
      }, this.random)
    });
    //throw new Error('getAll: not implemented');
  }

  async add(newTodo: NewTodo): Promise<Todo> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.repo.add(createTodo(newTodo)))
      }, this.random)
    });
    //throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.isTodoFound(id);
          resolve(this.repo.update(id, update));
        } catch(error) {
          reject(error);
        }
        
        
      }, this.random)
    })
    //throw new Error('update: not implemented');
  }

  async remove(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          this.isTodoFound(id);
          resolve(this.repo.remove(id));
        } catch(error) {
          reject(error);
        }
        
      }, this.random)
    })
    //throw new Error('remove: not implemented');
  }
  
}

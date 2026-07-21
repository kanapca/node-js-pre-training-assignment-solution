import { InMemoryRepository } from './repository';
import { Todo, NewTodo } from './types';
import { createTodo } from './todo-factory';
import { updateTodo, removeTodo } from './todo-crud';

class TodoNotFoundError extends Error {
  constructor(id: number) {
    if(id < 0 || id === 0) super("Can't have a Todo with negative id");
    super(`Todo with id ${id} was not found`);
    this.name = "TodoNotFoundError";
  }
}

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();
  private item: Todo[] = [];
  private random = Math.random() * 300;

  isTodoFound(id: number) {
    let index = -1;
    for(let i in this.item) {
      if(this.item[i].id == id) index = id;
    }
    if(index === -1) {
      throw new TodoNotFoundError(id);
    }
  }

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
        resolve(this.item[this.item.length])
      }, this.random)
    });
    //throw new Error('add: not implemented');
  }

  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          this.isTodoFound(id);
          const updatedToDo = updateTodo(this.item, id, update);
          resolve(updatedToDo[0]);
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
          this.item = removeTodo(this.item, id);
          resolve();
        } catch(error) {
          reject(error);
        }
        
      }, this.random)
    })
    //throw new Error('remove: not implemented');
  }

  
}

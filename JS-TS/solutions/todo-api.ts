import { filterArray } from "./array-helpers";
import { Todo, NewTodo } from "./types";
import { createTodo } from "./todo-factory";

class TodoNotFoundError extends Error {
   constructor(id: number) {
    if(id < 0) { 
        super("Can't have a todo with negative id");
    } else {
        super(`Todo with id ${id} was not found`);
    }
    this.name = "TodoNotFoundError";
   }
}

export class TodoApi {
    private random = Math.random() * 300;
    private api: Todo[] = [];

    async getAll(): Promise<Todo[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([...this.api]);
            }, this.random);
        });
    }

    async add(newTodo: NewTodo): Promise<Todo> {
        return new Promise(resolve => {
            setTimeout(() => {
                const todo = createTodo(newTodo)
                this.api = [...this.api, todo];
                resolve({...todo});
            }, this.random);
        });
    }
}
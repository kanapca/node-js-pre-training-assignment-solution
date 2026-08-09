import { filterArray } from "./array-helpers";
import { Todo, NewTodo } from "./types";
import { createTodo } from "./todo-factory";
import { addTodo, updateTodo, removeTodo } from "./todo-crud";

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
    private api: Todo[] = [];

    async getAll(): Promise<Todo[]> {
        let random = Math.random() * 300;

        return new Promise(resolve => {
            setTimeout(() => {
                resolve([...this.api]);
            }, random);
        });
    }

    async add(newTodo: NewTodo): Promise<Todo> {
        let random = Math.random() * 300;

        return new Promise(resolve => {
            setTimeout(() => {
                const todo = createTodo(newTodo)
                this.api = addTodo(this.api, todo);
                resolve({...todo});
            }, random);
        });
    }

    async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
        let random = Math.random() * 300;

        return new Promise((resolve) => {
            setTimeout(() => {
                this.api = updateTodo(this.api, id, update);
                const updated = filterArray(this.api, todo => todo.id === id);
                resolve(updated[0]!);
            }, random);
        });
    }

    async remove(id: number): Promise<void> {
        let random = Math.random() * 300;
        
        return new Promise((resolve) => {
            setTimeout(() => {
                this.api = removeTodo(this.api, id);
                resolve();
            }, random);
        })
    }
}
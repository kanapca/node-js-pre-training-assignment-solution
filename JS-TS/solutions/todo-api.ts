import { Todo, NewTodo } from "./types";
import { createTodo } from "./todo-factory";
import { InMemoryRepository } from "./repository";

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
    private repo = new InMemoryRepository<Todo>();

    async getAll(): Promise<Todo[]> {
        let random = Math.random() * 300;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!this.repo) {
                    reject(new Error("No todos :("));
                }
                resolve(this.repo.findAll());
            }, random);
        });
    }

    async add(newTodo: NewTodo): Promise<Todo> {
        let random = Math.random() * 300;

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.repo.add(createTodo(newTodo)));
            }, random);
        });
    }

    async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
        let random = Math.random() * 300;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingTodo = this.repo.findById(id);
                if(!existingTodo) {
                    reject(new TodoNotFoundError(id));
                }
                resolve(this.repo.update(id, update));
            }, random);
        });
    }

    async remove(id: number): Promise<void> {
        let random = Math.random() * 300;
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingTodo = this.repo.findById(id);
                if(!existingTodo) {
                    reject(new TodoNotFoundError(id));
                }
                resolve(this.repo.remove(id));
            }, random);
        })
    }
}
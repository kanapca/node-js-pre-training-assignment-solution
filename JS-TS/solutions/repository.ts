import { Todo } from "./types";
import { addTodo, removeTodo } from "./todo-crud";
import { filterArray, mapArray } from "./array-helpers";

export class InMemoryRepository<T extends { id: number }> {
    private repository: T[] = [];

    add(entity: T): T {
        let newIndex = this.repository.length;
        this.repository[newIndex] = entity;
        return this.repository[newIndex];
    }

    update(id: number, patch: Partial<T>): T {
        this.repository = mapArray(this.repository, todo => todo.id === id ? {...todo, ...patch} : todo);
        const result = this.findById(id);
        return result;
    }

    remove(id: number): void {
        this.repository = filterArray(this.repository, todo => todo.id !== id);
    }

    findById(id: number): T {
        let result = filterArray(this.repository, todo => todo.id === id);
        return result[0]!;
    }

    findAll(): T[] {
        return [...this.repository];
    }
}
import { Todo } from "./types";
import { createTodo } from "./todo-factory";
import { filterArray, mapArray } from "./array-helpers";

export function addTodo(state: Todo[], todo: Todo): Todo[] {
    return [...state, todo]
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
    let result: Todo[] = state;
    
    filterArray(result, todo => todo.id === id);

    result = mapArray(result, todo => todo.id === id ? {...todo, ...update} as Todo : todo);
    return result;
}

export function removeTodo(state: Todo[], id: number): Todo[] {

}

export function getTodo(state: Todo[], id: number): Todo | undefined {

}
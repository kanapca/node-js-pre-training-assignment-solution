import { Todo } from "./types";
import { createTodo } from "./todo-factory";
import { filterArray, mapArray } from "./array-helpers";

function idSearch(state: Todo[], id: number) {
    let isFound = false;
    for(let item of state) {
        if(item.id === id) isFound = true;
    }
    return isFound;
}

export function addTodo(state: Todo[], todo: Todo): Todo[] {
    return [...state, todo]
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
    if(!idSearch(state, id)) {
        throw new Error(`Can't update todo with id ${id}`);
    }
    let result: Todo[] = state;
    result = mapArray(result, todo => todo.id === id ? {...todo, ...update} as Todo : todo);
    return result;
}

export function removeTodo(state: Todo[], id: number): Todo[] {
    if(!idSearch(state, id)) {
        throw new Error(`Can't remove todo with id ${id}`);
    }
    let result: Todo[] = state;
    result = filterArray(result, todo => todo.id != id);

    return result;
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
    let result: Todo[] = state;
    result = filterArray(result, todo => todo.id == id);

    return result[0];
}
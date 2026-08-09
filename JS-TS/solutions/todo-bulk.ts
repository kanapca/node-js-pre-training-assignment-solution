import { mapArray, filterArray, reduceArray } from "./array-helpers";
import { Todo, TodoStatus } from "./types";
import { updateTodo } from "./todo-crud";

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
    return mapArray(state, todo => ({ 
        ...todo, 
        status: completed ? TodoStatus.COMPLETED: TodoStatus.PENDING
    }));
}

export function clearCompleted(state: Todo[]): Todo[] {
    return filterArray(state, todo => todo.status !== TodoStatus.COMPLETED);
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
    let result = filterArray(state, todo => todo.status === status);
    return reduceArray(result, a => ++a, 0);
}
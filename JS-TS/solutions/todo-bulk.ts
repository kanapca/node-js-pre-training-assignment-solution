import { mapArray, filterArray } from "./array-helpers";
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
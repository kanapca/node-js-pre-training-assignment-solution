import { NewTodo, Todo, TodoStatus} from "./types";
import { TodoApi } from "./todo-api";
import { filterArray } from "./array-helpers";

export class TodoService {
    constructor(private readonly api: TodoApi) { }

    async create(title: string, description?: string): Promise<Todo> {
        return await this.api.add({title, description} as NewTodo)
    }

    async toggleStatus(id: number): Promise<Todo> {
        const todos = await this.api.getAll();
        return this.api.update(id, {status: TodoStatus.COMPLETED ? TodoStatus.IN_PROGRESS : TodoStatus.COMPLETED});
    }

    async search(keyword: string): Promise<Todo[]> {
        const todos = await this.api.getAll();
        const lowerCase = keyword.toLowerCase();

        return filterArray(todos, todo => 
            todo.title.toLowerCase().includes(lowerCase) ||
            todo.description?.toLowerCase().includes(lowerCase) || false
        );
    }
}
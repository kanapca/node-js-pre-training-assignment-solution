import { NewTodo, Todo, TodoStatus} from "./types";
import { TodoApi } from "./todo-api";
import { filterArray } from "./array-helpers";

export class TodoService {
    constructor(private readonly api: TodoApi) { }

    async create(title: string, description?: string): Promise<Todo> {
        if(title === null || title === undefined) {
            throw new Error("Can't create a todo without a title");
        }
        return await this.api.add({title, description} as NewTodo)
    }

    async toggleStatus(id: number): Promise<Todo> {
        const todos = await this.api.getAll();
        let todo = filterArray(todos, todo => todo.id === id);

        const newStatus = todo[0]!.status === TodoStatus.COMPLETED
        ? TodoStatus.PENDING
        : TodoStatus.COMPLETED;
        return this.api.update(id, {status: newStatus});
    }

    async search(keyword: string): Promise<Todo[]> {
        if(keyword === null || keyword === undefined) {
            throw new Error("Can't find a todo without a key word");
        }
        const todos = await this.api.getAll();
        const lowerCase = keyword.toLowerCase();

        return filterArray(todos, todo => 
            todo.title.toLowerCase().includes(lowerCase) ||
            todo.description?.toLowerCase().includes(lowerCase) || false
        );
    }
}
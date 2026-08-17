import { Todo } from "./types";
import { TodoApi } from "./todo-api";
import { TodoService } from "./todo-service";

export class ToDoManager {
    private api = new TodoApi();
    private service = new TodoService(this.api);
    private isInitialized = false;

    async init(): Promise<void> {
        if (this.isInitialized) {
            return;
        }
        this.isInitialized = true;
        
        await this.service.create("Todo1", "With description");
        await this.service.create("Todo2");
        await this.service.create("Todo3", "With description again");
    }

    async add(title: string, description?: string): Promise<void> {
        await this.service.create(title, description);
    }

    async complete(id: number): Promise<void> {
        await this.service.toggleStatus(id);
    }

    async list(): Promise<Todo[]> {
        return await this.api.getAll();
    }
}
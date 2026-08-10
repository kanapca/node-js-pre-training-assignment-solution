import { Todo } from "./types";
import { ToDoManager } from "./todo-manager";

class CLI {
    private manager = new ToDoManager();

    async run(): Promise<void> {
        const args = process.argv.slice(2);
        const command = args[0];

        if(!command) {
            return;
        }

        try {
            await this.manager.init();

            switch(command) {
                case "add": await this.handleAdd(args); break;
                case "complete": await this.handleComplete(args);break;
                case "list": await this.handleList();break;
            }
        } catch(error) {
            console.error("Error");
        }
    }

    
    private async handleAdd(args: string[]): Promise<void> {
        const title = args[1];
        const description = args[2] || undefined;

        if(!title) {
            console.error("Can't create a todo without a title");
            return;
        }

        await this.manager.add(title, description);
        console.log(`Added todo "${title}"`);
    }

    private async handleComplete(args: string[]): Promise<void> {
        const idStr = args[1];
    
        if (!idStr) {
            console.error("Please provide a valid ID");
            return;
        }

        const id = parseInt(idStr);
        if (isNaN(id)) {
            console.error(" Please provide a valid number for ID");
            return;
        }

        await this.manager.complete(id);
        console.log(`Todo ${id} is toggled`);
    }

    private async handleList(): Promise<void> {
        const todos = await this.manager.list();

        if(todos.length === 0) {
            console.log("No todos :(");
            return;
        }

        console.log("Todo list:");

        todos.forEach((todo: Todo) => {
            console.log(`${todo.id} || ${todo.title} || ${todo.status}`);
        })
    }
}

const cli = new CLI();
cli.run().catch(console.error);
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
}
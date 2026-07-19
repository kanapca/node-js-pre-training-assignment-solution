interface Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
    createdAt: Date;
}

enum TodoStatus {
    
}



export { Todo, TodoStatus };
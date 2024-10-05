import { ITodo } from "../interfaces/ITodo";
import { Todo } from "../schemas/todoSchema";

export class todoRepository {
    createTodo = async (todo: ITodo): Promise<ITodo> => {
        return await new Todo(todo).save();
    }

    getTodoById =  async (_id: string): Promise<ITodo | null> => {
        return await Todo.findById(_id);
    }

    editTodo = async (_id: string, update: Partial<ITodo>): Promise<ITodo | null> => {
        return await Todo.findByIdAndUpdate(_id, update);
    }

    deleteTodo = async (_id: string): Promise<void> => {
        await Todo.findByIdAndDelete(_id);
    }
}
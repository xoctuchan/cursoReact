import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const {todos, todoCount, pendingTodoCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo();

    return (
        <>
            <h1>Todo App ({todoCount}), <small>Pendientes: ({ pendingTodoCount})</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/*TodoList*/}
                    <TodoList todos = {todos} onDeleteTodo = { handleDeleteTodo } onToggleTodo = {handleToggleTodo}/>
                </div>
                <div className="col-5">
                    {/*TodoAdd onNewTodo() */}

                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
            
        </>
    )
}

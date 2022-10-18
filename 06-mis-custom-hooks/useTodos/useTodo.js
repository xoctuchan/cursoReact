import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"
export const useTodo = () => {

    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const pendingTodoCount = todos.filter(todo=>!todo.done).length;
    const todoCount = todos.length;
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id)=>{
       //console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id)=>{
        dispatch({
            type: '[TODO] Toogle Todo',
            payload: id
        });
    }

    return (
        {
            todos,
            handleNewTodo,
            handleDeleteTodo,
            handleToggleTodo,
            pendingTodoCount,
            todoCount
        }
    )
}

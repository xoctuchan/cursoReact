import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ( { onNewTodo }) => {
    const {description, onInputChange, onResetForm}=useForm({
        description: ''
    });

    const OnFormSubmit = (event)=>{
        event.preventDefault();
        if(description.length<=1)return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo && onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form onSubmit={OnFormSubmit}>
                <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={onInputChange} 
                    className="form-control" />
                <button className="btn btn-primary mt-2" type="submit">
                    Agregar
                </button>
            </form>
        </>
    )
}

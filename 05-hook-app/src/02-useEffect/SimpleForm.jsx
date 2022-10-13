import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Pablo',
        email: 'xoctuchan@yahoo.es'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        //.log('useEffect')
    }, []);

    useEffect(() => {
        //.log('formSate change')
    }, [formState]);


    useEffect(() => {
        //console.log('email change')
    }, [email]);
    



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" value={username} name="username" placeholder="Username" className="form-control" 
                onChange={onInputChange}
            />
            <input type="text" value={email} name="email" placeholder="email@gmail.com" className="form-control mt-2" 
                onChange={onInputChange}
            />
            { 
                (username==='Pablo') && <Message/>
            }
        </>

    )
}   

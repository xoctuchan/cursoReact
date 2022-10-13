import { useForm } from "../hooks/useForm"



export const FormWithCustomHook = () => {
    
    const { formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: 'Pablo',
        email: 'xoctuchan@yahoo.es',
        password:'123'
    });

    return (
        <>
            <h1>Formulario with custom hook</h1>
            <hr />
            <input type="text" value={username} name="username" placeholder="Username" className="form-control" 
                onChange={onInputChange}
            />
            <input type="text" value={email} name="email" placeholder="email@gmail.com" className="form-control mt-2" 
                onChange={onInputChange}
            />
            <input type="password" value={password} name="password" className="form-control mt-2" 
                onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={onResetForm}>
                Borrar
            </button>
        </>

    )
}   

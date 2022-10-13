import { useState } from "react"

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:{otro_campo: 30}
    });
    const {counter1, counter2, counter3}=counter;
    return (
        <>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <h1>Counter: {counter3.otro_campo}</h1>
            <hr />
            <button className="btn btn-primary" onClick={ 
                () =>setCounter({
                    ...counter,
                    counter3: {otro_campo:counter3.otro_campo+1}
                })
            }>+1</button>
        </>
    )
}

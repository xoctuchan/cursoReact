import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const {counter, incrementar, decrementar, reset} = useCounter();
    return (
        <>
            <h1>Counter Withc Custom Hook: {counter}</h1>
            <hr />
            <button className="btn btn-danger" onClick={ () =>decrementar() }>-1</button>
            <button className="btn btn-warning" onClick={ () =>reset() }>Reset</button>
            <button className="btn btn-success" onClick={ () =>incrementar(2) }>+1</button>
        </>
    )
}

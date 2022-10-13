import { useState } from "react"
import { useEffect } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0})
    useEffect(() => {
            const onMouseMove = ({x, y})=>{
                setCoords( {x,y});
            }
            window.addEventListener('mouseover',onMouseMove);
        return () => {
            window.removeEventListener('mouseover',onMouseMove);
        }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}

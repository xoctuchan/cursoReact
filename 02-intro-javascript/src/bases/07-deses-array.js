const personajes = ['Goku', 'Vegueta', 'Trunks'];
const [, ,trunks] =personajes

console.log(trunks)

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const estado = (valor) =>{
    return [ valor, ()=>{console.log('hola mundo')}];
}

const [nombre, setNombre] = estado('Pablo');

console.log(nombre);
setNombre();
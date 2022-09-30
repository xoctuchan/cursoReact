/*
function saludar (nombre) {
    return `Hola, ${nombre}`;
}
*/

/*
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar('Pablo'));
*/

const saludar2 = (nombre)=>{
    return `Hola ${nombre} desde saludar2`
}
console.log(saludar2('Pablo'));


const saludar3 = (nombre)=> `Hola ${nombre} desde saludar3`
console.log(saludar3('Pablo'));


const getUser = ()=>({
        uid: 'ABC123',
        username: 'pablix'
    })
const user = getUser();
console.log(user);


const getUsuarioActivo = (nombre)=>({
    uid: '123zxc',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Juan Pablo');
console.log(usuarioActivo);
import heroes from "../data/heroes";

//console.log(owners);

//FIND - SOLO RETORNA UN REGISTRO
const getHeroeById = (id) =>{
    return heroes.find( (heroe) => heroe.id===id)
}
//console.log(getHeroeById(2));

//FILTER - REGRESA VARIOS REGISTROS
const getHeroeByOwner = (owner)=>{
    return heroes.filter((heroe)=>heroe.owner===owner)
}
//console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner
}
//import { heroes } from './data/heroes';

import { heroes } from "../data/heroes";

//import {heroes} from './data/heroes'
/*
const getHeroeById = (id) =>{
    return heroes.find( (heroe) => {
        if (heroe.id ===id)
        return true;
        else
        return false;
    })
}
*/
//FIND - SOLO RETORNA UN REGISTRO
const getHeroeById = (id) =>{
    heroes.find( (heroe) => heroe.id===id)
}
console.log(getHeroeById(5));

//FILTER - REGRESA VARIOS REGISTROS
const getHeroeByOwner = (owner)=>{
    return heroes.filter((heroe)=>heroe.owner===owner)
}
console.log(getHeroeByOwner('DC'));
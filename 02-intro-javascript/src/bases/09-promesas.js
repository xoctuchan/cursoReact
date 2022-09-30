import { getHeroeById } from "./08-import-export";

/*
const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const heroe = getHeroeById(2);
        const heroesOwner  = getHeroeByOwner('DC');
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    }, 2000);
});

promesa.then((heroe)=>{
    console.log('Then de la promesa')
    console.log(heroe);
}).catch((error)=>{
    console.log(error)
});
*/

const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe)
                resolve(heroe);
            else
                reject(`El heroe con id ${id} no fue encontrado`)
            //reject('No se pudo encontrar el heroe')
        }, 2000);
    });
}

getHeroeByIdAsync(1).then((heroe)=>{
    console.log(heroe);
}).catch((error)=>{
    console.log(error)
})
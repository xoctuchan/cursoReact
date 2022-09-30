const persona = {
    nombre: 'Pablo',
    edad: 30,
    clave: 'admin123'
}

//const {nombre, edad, clave} = persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);

//const {nombre:nombre2, edad:edad2, clave:clave2} = persona;
//console.log(nombre2);
//console.log(edad2);
//console.log(clave2);


const useContext = ({clave, nombre, edad, rango = 'Capitan'})=>{
    //console.log(nombre)
    return {
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 14.1232,
            lng:-12.3232
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios, lat, lng);
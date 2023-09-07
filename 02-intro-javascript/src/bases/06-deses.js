// desestructuracion
// asignacion de desestructuracion
const persona = {
    nombre: 'tony',
    edad: 14,
    clave: 'iron man',
    ciudad: 'medellin'
};
// extrae solo lo que te diga de este objeto
// const {edad:edad2, clave, nombre}= persona;
// console.log(nombre);
// console.log(edad2);
// console.log(clave);

const usState = ({clave, edad})=>{
    // console.log(clave, ciudad);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 11.3344,
            lng: 23.4343
        }
    }
};
// const avenger = usContext(persona);
const {nombreClave, anios, latlng:{lat, lng}} = usState(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
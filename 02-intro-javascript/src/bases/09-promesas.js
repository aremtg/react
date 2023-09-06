// const promesa = new Promise(function (resolve, reject) {
//     let suma = 2 + 6;
//     if (suma === 0){
//         resolve('se sumo bien');
//     }
//     else{
//         reject('se sumo mal');
//     }
// });
// promesa.then(function(mensaje){
//     console.log(mensaje)
// }).catch(function(error){
//     console.log(error)
// })
// la funcion resolve esta vinculada con then 
// la fucnion reject con catch
// --------------- 
import { getHeroeById } from "./bases/08-imp-exp";
// const promesa2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         const heroe = getHeroeById(4);
//         resolve(heroe);
//     }, 2000);

//     reject('no se pudo encontrar el heroe');
// });

// promesa2.then((heroe)=>{
//     console.log('heroe : ', heroe)
// })
// .catch(err => console.warn(err));
// ---------------------------------
// esto es para no asincrono
const getHeroeByIdAsync = (id)=>{
    return new Promise(function(resolve, reject){
        const heroe = getHeroeById(id);
        if(heroe){
            resolve(heroe);
        }else{
            reject('algo salio mal');
        }
    });
}
getHeroeByIdAsync(3)
.then(console.log)
// .then(console.info)
.catch(console.error);
// .catch(console.warn);
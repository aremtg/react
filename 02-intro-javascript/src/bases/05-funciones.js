const nombre = 'tatiana';
const ape = 'gusgus';

// consejo al crear un afuncion crearla co una constante
// y no con nombre de funcion, evita problemas

const saludar = function (nombre){
    return `hola, ${nombre}`;
}
const saludar2 = (nombre)=>{
    return `hola, ${nombre}`;
}
const saludar3 = (nombre)=>`hola, ${nombre}`;

const saludar4 = ()=> 'hola mundo';

console.log(saludar('primer'));
console.log(saludar2('segundo'));
console.log(saludar3('tercero'));
console.log(saludar4());

// tarea, transformar a fuction flecha
// function getUsuarioActivo(nombre){
//     return {
//         uid: '11',
//         username: nombre
//     }
// }
// const usuarioActivo = getUsuarioActivo('fernando');
// console.log(usuarioActivo);
// solucion
const getUsuarioActivo = (nombre)=> ({
    uid: 'abc1',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('fernando');
console.log(usuarioActivo);
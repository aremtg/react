const nombre = 'tatana';
const apellido = 'guzman';

// const nombrecom = nombre + ' ' + apellido;
const nombrecom = `
${nombre}
${apellido}
${20 + 3}`;

console.log(nombrecom)

function saludo(nombre){
    return 'hola mundo ' + nombre;
}

console.log(`este es un texto ${saludo(nombre)}`)
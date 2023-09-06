// objetos literales
const persona = {
    nombre: 'Tatiana',
    apellido: 'Guzman',
    edad: 20,
    direccion: {
        ciudad: 'yopal',
        zip: 443343,
        lat: 12.7778,
        lng: 23.9876,

    }
};

// en js se puede considerar la , como buena practica, no causa problemas

console.log({persona:persona})
// esto es igual a crear un objeto dntr de otro

// que no hacer jamas para hacer mutaciones

 const persona2 = persona;
 persona2.nombre = 'peter';
 console.table(persona2)
 
// pues esto modifica el array principal
console.table(persona);

// usar el ... para crear un clon con operador spread

const persona2 = {...persona};
persona2.nombre = 'Yulian';
persona2.apellido= 'Rodriguez'
persona2.edad = 19;
console.table(persona2)
console.table(persona)

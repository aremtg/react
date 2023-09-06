const personajes = ['goku', 'bulma', 'vegueta'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , ,p3 ] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return['abc', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);
// tarea

const useState = (valor)=>{
    return [valor, ()=>{console.log('hola mundo')}];
}
const [nombre, fNombre] = useState('goku');

console.log(nombre)
fNombre()

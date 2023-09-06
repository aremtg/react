const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
export const owners = ['dc', 'marvel'];
export default heroes;

// si queremos poner una por defecto y la otra no
// export {
//     heroes as defauld,
//     owners
// }
// y en el otro lado seria
//  export heroes, {owners} from './data/heroes'

//si los dos son constantes o export simples
// export {
//     heroes,
//     owners
// }
// y en el otro lado seria
//  export { heroes, owners } from './data/heroes'
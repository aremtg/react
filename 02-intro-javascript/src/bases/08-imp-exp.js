import heroes, { owners } from "../data/heroes";


export const getHeroeById=(id)=> {
//nusca en heroes el heroe  con id igual al parametro
    return heroes.find((heroe)=> heroe.id === id);
}

// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner)=>{
    // usar filter para que me devuelva todos
    // los elementos con este parametro
    return heroes.filter((heroe)=> heroe.owner === owner);
}

// console.log(getHeroesByOwner('DC'));
// console.table(owners)

// siguiente clase- exportaciones e importaciones

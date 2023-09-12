import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('prueba a 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe segun id', () => { 
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     });
     test('getHeroeById debe retornar undefined a un id que no existe', () => { 
        const id = 6;

        const hero = getHeroeById(id);

        expect(hero).toEqual(undefined)
     });
     test('getHeroesByOwner debe retornar un arreglo con los heroes de dc', () => { 
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}]);
     });
 })


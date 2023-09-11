import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('prueba para las 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'Aremtgz'
        };
        const user = getUser();
        //console.log(user)
        expect(testUser).toEqual(user);

     });
     test('getUsuario debe retornar un objeto', () => { 
        const name = 'Fernando';
       
        const user2 = getUsuarioActivo(name);
        expect(user2).toEqual({
            uid: 'ABC567',
            username: name
        });
    });
 });


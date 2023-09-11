import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('prueba en 02-template-string', () => { 
    test('getSaludo debe retornar "hola tatiana"', () => { 
        const name = 'tatiana';
        const message = getSaludo( name );
        expect(message).toBe(`Hola ${ name }`)
     });
   });
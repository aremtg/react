import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('esta prueba debe retornar un objeto, desestructurado', () => { 
    test('should first', () => { 
    const objetoEntrada = {
        clave: '123a',
        nombre: 'John Doe',
        edad: 30,
        // rango: 'Capitán' // Puedes incluir rango aquí si es necesario
        };
        
        const resultado = usContext(objetoEntrada);
        
        expect(resultado).toEqual({
        nombreClave: objetoEntrada.clave,
        anios: objetoEntrada.edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
        });
     })
 })
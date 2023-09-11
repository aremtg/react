import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('esta prueba debe retornar un objeto, desestructurado', () => { 
    test('should first', () => { 
        const claveTest = '123a'
        const edadTest = 20
        const fun = usContext();

        expect(fun).toEqual({
            nombreClave:'123a',
            anios: 20,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
     })
 })
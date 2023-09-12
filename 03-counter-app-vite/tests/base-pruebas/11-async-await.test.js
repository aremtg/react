import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('prueba con 11-saync-await', () => { 
    test('getImagen debe retornar la url de una imagen', async() => { 
       const url = await getImagen();
       console.log(url);
     });
 });
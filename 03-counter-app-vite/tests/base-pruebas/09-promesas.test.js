import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('prueba en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 2;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 2,
                    name: 'Spiderman',
                    owner: 'Marvel'
                }); // Ajusta esto según tus datos

                // Llama a done() aquí para indicar que la prueba ha finalizado
                done();
            })
            .catch(error => {
                // Si ocurre un error también debes llamar a done() para finalizar la prueba
                done(error);
            });
    });
    test('getHeroeByIdAsync debe ontener un error si heroe no existe', (done) => {
        const id = 27;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                    // Si ocurre un error también debes llamar a done() para finalizar la prueba
                done();
            });
    });
});

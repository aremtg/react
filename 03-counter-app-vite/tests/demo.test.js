
describe('prueba de <Appmia />', () => { 

    test('mi primer test', ()=>{
        // inicializacion
        const mensaje1 = 'hola mundo';
        // estimulo
        const mensaje2 = mensaje1.trim();
        // observamos el comportamiento
        expect(mensaje1).toBe(mensaje2)
    });

});
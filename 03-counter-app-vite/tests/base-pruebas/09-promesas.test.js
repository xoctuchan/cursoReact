import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test 09-promesas', () => { 
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 
        const id=1;
        getHeroeByIdAsync(id).then(heroe =>{
            expect (heroe).toEqual({
                id: 1,
                name:'Batman',
                owner: 'DC'
            });
            done();
        });
    });  
    
    test('getHeroeByIdAsync debe obtener un error si no existe el heroe', (done) => { 
        const id2=1;
        getHeroeByIdAsync(id2)
        .then(heroe =>{
            expect(heroe).toBeFalsy();
            done();
        })
        .catch(error =>{
            expect (error).toBe ('No se pudo encontrar el héroe')
            done();
        });
    });
});
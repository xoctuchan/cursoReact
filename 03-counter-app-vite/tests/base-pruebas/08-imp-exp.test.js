import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp.exp', () => { 
    test('getHeroById debe retornar un heroe por ID', () => { 
        const id=1;
        const heroe = getHeroeById(id);
        
        expect ( heroe ).toEqual( {id: 1, name: 'Batman', owner:'DC'});
    });

    test('getHeroById debe retornar undefined si no existe el id', () => { 
        const id=100;
        const heroe = getHeroeById(id);
        
        expect ( heroe ).toBeFalsy( );
    });

    test('getHeroesByOwner DC', () => { 
        const owner='DC';
        const heroes = getHeroesByOwner(owner);
        
        expect ( heroes.length ).toBe( 3 );
        expect ( heroes ).toEqual ([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
    });

    test('getHeroesByOwner Marvel', () => { 
        const ownerDC='Marvel';
        const heroesDC = getHeroesByOwner(ownerDC);
        
        expect ( heroesDC.length ).toBe( 2);
    });
})
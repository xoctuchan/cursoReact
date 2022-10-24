import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{

    console.log('first')
    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}
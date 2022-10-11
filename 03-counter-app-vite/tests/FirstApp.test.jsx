import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => { 
/*    test('Debe de hacer match con el snapshot', () => {
        const title = 'Hola soy vegueta';
        const { container } = render(<FirstApp title ={title}/>);
        expect (container).toMatchSnapshot();
    });
*/
    test('Aqui debe mostrar el titulo en un h1', () => { 
        const title = 'Hola soy vegueta';
        const { container, getByText, getByTestId } = render(<FirstApp title ={title}/>);
        expect( getByText (title) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect (h1.innerHTML).toContain( title );

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('Aqui debe mostrar el subtitulo en un h1', () => { 
        const title = 'Hola soy vegueta';
        const subtitulo = 'Soy el subtitulo';
        const { getAllByText } = render(<FirstApp title ={title} subTitle={subtitulo}/>);
        expect( getAllByText(subtitulo).length ).toBe(2);
    });
})
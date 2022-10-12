import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en GiftItem', () => { 
    const title= 'Prueba Title';
    const url = 'http://www.google.com/';
    test('Debe hacer match con el snapshot', () => { 
        const { container } = render (<GifItem title={title} url={url}/>);
        expect (container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con la url y el alt indicado', () => { 
        const { container } = render (<GifItem title={title} url={url}/>);
        const { src, alt }= screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
        //console.log(screen.getByRole('img').src)
        //screen.debug();
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render (<GifItem title={title} url={url}/>);
        expect( screen.getByText(title) ).toBeTruthy();
    })
})
import { useReducer } from "react";
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

const initialState = {
    logged: false,
    name: 'pablo'
};

describe('Pruebas en authReducer', () => { 
    test('Debe de retornar el estado por defecto', () => { 
        const state = authReducer(initialState, {});
        expect( state ).toBe(initialState);
    });

    test('Debe de llamar el login, autenticar y establer el usuario', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Pablix',
                id: '123'
            }
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({logged: true, user: action.payload})
    });

    test('Debe de borrar el name del usuario y logged en false ', () => {
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan'}
        }
        const action = {
            type: types.logout
        }
        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false})
    })

})
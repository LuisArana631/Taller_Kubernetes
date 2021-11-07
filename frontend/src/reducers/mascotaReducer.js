import { types } from "../types/types";


const initialState = {
    mascotas: [{
        id: 1,
        mascota: "Luis",
        dueño: "UWU",
        edad: '23'
    },{
        id: 2,
        mascota: "Terry",
        dueño: "Luis",
        edad: '2'
    }],
    actualMascota: null
};

export const mascotaReducer = ( state = initialState, action  ) => {
    switch (action.type) {
        case types.mascotaSetItem:
            return {
                ...state,
                actualMascota: action.payload
            }
        case types.mascotaAddNew:
            return {
                ...state,
                mascotas: [
                    ...state.mascotas,
                    action.payload
                ]
            }
        case types.mascotaDeleteItem:
            return {
                ...state,
                mascotas: state.mascotas.filter(
                    e => (e.id !== action.payload.id) 
                ), actualMascota: null
            }
        case types.mascotaViewItems:
            return {
                ...state
            }
        case types.mascotaEditItem:
            return {
                ...state,
                mascotas: state.mascotas.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        default:
            return state;
    }
}
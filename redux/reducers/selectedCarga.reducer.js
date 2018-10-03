import { ADD_CARGA, SELECT_CARGA, ADD_ITEM } from '../actions/cargas.actions';

export default selectedCargaReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CARGA:
            return { tipo: action.payload.tipo, fecha: Date.now(), hoja: action.payload.hoja, items: [] }
        case SELECT_CARGA:
            return action.payload;
        case ADD_ITEM:
            const newItems = state.items;
            newItems.push(action.payload);

            return { ...state, items: newItems };
    }
    return state;
};
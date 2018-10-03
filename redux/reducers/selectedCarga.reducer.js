import moment from 'moment';

import { NEW_CARGA, SELECT_CARGA, ADD_ITEM, EDIT_ITEM } from '../actions/cargas.actions';

export default selectedCargaReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_CARGA:
            return { tipo: action.payload.tipo, fecha: getFecha(), hojaRuta: action.payload.hoja, items: [] }
        case SELECT_CARGA:
            return action.payload;
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        case EDIT_ITEM:
            const i = state.items.findIndex(item => action.payload.id === item.id);
            const items = state.items;
            items[i] = action.payload;

            return { ...state, items };
    }
    return state;
};

const getFecha = () => {
    return moment(new Date()).hour(0).minute(0).second(0).millisecond(0).valueOf();
};
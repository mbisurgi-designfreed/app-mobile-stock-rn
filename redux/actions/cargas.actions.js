import axios from 'axios';

export const LOADING_CARGAS = 'LOADING_CARGAS';
export const LIST_CARGAS_DONE = 'LIST_CARGAS_DONE';
export const ADD_CARGA = 'ADD_CARGA';
export const SELECT_CARGA = 'SELECT_CARGA';
export const ADD_ITEM = 'ADD_ITEM';

export const list = (hojaId) => {
    return async (dispatch) => {
        const URL = `http://bybgas.dyndns.org:8080/distribuidoras-backend/carga/findByHojaRuta/${hojaId}`;

        dispatch({
            type: LOADING_CARGAS
        });

        try {
            const res = await axios.get(URL);

            if (res) {
                dispatch({
                    type: LIST_CARGAS_DONE,
                    payload: res.data
                });
            }
        } catch (err) {

        }
    }
};

export const add = (tipo, hoja) => {
    return {
        type: ADD_CARGA,
        payload: { tipo, hoja }
    }
};

export const select = (carga) => {
    return {
        type: SELECT_CARGA,
        payload: carga
    }
};

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};


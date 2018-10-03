import axios from 'axios';

export const LOADING_CARGAS = 'LOADING_CARGAS';
export const ADDING_CARGAS = 'ADDING_CARGAS';
export const ADDING_CARGAS_DONE = 'ADDING_CARGAS_DONE';
export const LIST_CARGAS_DONE = 'LIST_CARGAS_DONE';
export const NEW_CARGA = 'NEW_CARGA';
export const SELECT_CARGA = 'SELECT_CARGA';
export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

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

export const add = (carga) => {
    return async (dispatch) => {
        const URL = `http://bybgas.dyndns.org:8080/distribuidoras-backend/carga/add`;

        dispatch({
            type: ADDING_CARGAS
        });

        try {
            const res = await axios.post(URL, carga);

            if (res) {
                console.log(res);
                dispatch({
                    type: ADDING_CARGAS_DONE
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
};

export const newCarga = (tipo, hoja) => {
    return {
        type: NEW_CARGA,
        payload: { tipo, hoja }
    }
};

export const selectCarga = (carga) => {
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

export const editItem = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
};


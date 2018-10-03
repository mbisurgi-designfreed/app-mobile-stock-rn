import { LOADING_CARGAS, LIST_CARGAS_DONE } from '../actions/cargas.actions';

export default cargasReducer = (state = { cargas: [], loading: false }, action) => {
    switch (action.type) {
        case LOADING_CARGAS:
            return { ...state, loading: true }
        case LIST_CARGAS_DONE:
            return { ...state, cargas: action.payload, loading: false }
    }
    return state;
};
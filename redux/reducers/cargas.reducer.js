import { ADDING_CARGAS, ADDING_CARGAS_DONE, LOADING_CARGAS, LIST_CARGAS_DONE } from '../actions/cargas.actions';

export default cargasReducer = (state = { cargas: [], loading: false }, action) => {
    switch (action.type) {
        case ADDING_CARGAS:
            return { ...state, loading: true }
        case ADDING_CARGAS_DONE:
            return { ...state, loading: false }
        case LOADING_CARGAS:
            return { ...state, loading: true }
        case LIST_CARGAS_DONE:
            return { ...state, cargas: action.payload, loading: false }
    }
    return state;
};
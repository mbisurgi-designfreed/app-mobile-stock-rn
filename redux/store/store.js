import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cargasReducer from '../reducers/cargas.reducer';
import selectedCargaReducer from '../reducers/selectedCarga.reducer';

const rootReducer = combineReducers({
    carga: selectedCargaReducer,
    cargas: cargasReducer,
});

export default store = createStore(rootReducer, applyMiddleware(thunk));
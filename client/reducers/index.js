import { combineReducers } from 'redux';

import dumbletourReducer from './dumbletourReducer.js';

const reducers = combineReducers ({
    dumbletour: dumbletourReducer
});

export default reducers;
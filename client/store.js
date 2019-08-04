import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSTore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js'

const store = createStore (
    reducers, 
    applyMiddleware(thunk)
    // composeWithDevTools()
);

export default store;
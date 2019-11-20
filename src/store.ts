
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { applyMiddleware, createStore } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(thunk));

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [ 'rootReducer' ]
  };

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

// Exports
export {
    store,
    persistor,
};
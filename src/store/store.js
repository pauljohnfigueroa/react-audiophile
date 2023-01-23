import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log(`Type: ${action.type}`);
    console.log(`Payload: ${action.payload}`);
    console.log(`Current state ${store.getState()}`);

    next(action);
    console.log(`Next state ${store.getState()}`);
}


// const middleWares = [logger];
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// createStore is already deprecated
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
    enhancers: [composedEnhancers],
});

export const persitor = persistStore(store);


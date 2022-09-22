import {createStore, applyMiddleware, compose} from 'redux'

import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

declare global {
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose
    }
}

const SagaMiddleware = createSagaMiddleware()

const middlewares = [SagaMiddleware]

export function configureStore(): void | any {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(reducers, composeEnhancers(
        applyMiddleware(...middlewares)
    ))

    SagaMiddleware.run(sagas)

    if(module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducers = require('./reducers');
            store.replaceReducer(nextRootReducers)
        })
    }

    return store;
}

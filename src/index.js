import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from "./components/App";
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import setupSocket from './sockets'
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(SagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

SagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
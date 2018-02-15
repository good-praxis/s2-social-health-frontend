import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from "./components/App";
import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'
import { addUser } from './actions'
import { setupSocket } from './sockets'
import handleNewMessage from './sagas'
import username from './utils/name'

const SagaMiddleware = createSagaMiddleware()

const store = createStore(chat)

store.dispatch(addUser('Me'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
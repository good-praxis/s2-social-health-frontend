import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'
import { addUser } from './actions'

const store = createStore(chat)

store.dispatch(addUser('Me'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)
registerServiceWorker()
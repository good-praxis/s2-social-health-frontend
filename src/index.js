import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'

const store = createStore(chat)

window.React = React

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
import React from 'react'
import ReactDOM from 'react-dom'

import App from "./components/App";
import registerServiceWorker from './registerServiceWorker'
// import username from './utils/name'

ReactDOM.render(
        <App />,
    document.getElementById('react-container')
)
registerServiceWorker()

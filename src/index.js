import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './components/HelloWorld'

window.React = React

render (
    <HelloWorld/>,
    document.getElementById('react-container')
)
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import io from 'socket.io-client'
let socket = io(`${location.protocol}//${location.host}`);
socket.on('message', function(json) {
  render(
    <App store={json.store} messages={json.messages}/>,
    document.getElementById('app')
  )
});
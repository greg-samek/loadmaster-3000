import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import loadApp from './reducers';
import App from './components/App'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io(`${location.protocol}//${location.host}`);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
let store = applyMiddleware(socketIoMiddleware)(createStore)(loadApp);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
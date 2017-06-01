import React from 'react';
import { render } from 'react-dom';
import Alerts from './Alerts';
import Header from './Header';
import Graph from './Graph';


export default class App extends React.Component {
  render () {
    const { store, messages } = this.props;
    return (<div>
      <Header></Header>
      <Graph data={store}></Graph>
      <Alerts messages={messages}></Alerts>
    </div>)
  }
}
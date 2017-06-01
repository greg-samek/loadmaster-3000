import React from 'react';
import { render } from 'react-dom';
import Graph from './Graph';
import Header from './Header';

export default class App extends React.Component {
  render () {
    const { store, average } = this.props;
    return (<div>
      <Header></Header>
      <Graph data={store}></Graph>
      <div>Average Load: <b><span>{average}</span></b></div>
    </div>)
  }
}
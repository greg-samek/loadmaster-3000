import React from 'react';
import { render } from 'react-dom';
import Graph from './Graph';

export default class App extends React.Component {
  render () {
    const { store, average } = this.props;
    return (<div>
      <Graph data={store}></Graph>
      <div>Average Load: <b><span>{average}</span></b></div>
    </div>)
  }
}
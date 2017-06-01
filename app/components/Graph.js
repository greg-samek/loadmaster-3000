import React from 'react';
import { render } from 'react-dom';
import { LineChart, Line, YAxis } from 'recharts';

export default class Graph extends React.Component {

  render () {
    let { data } = this.props;
    data = data.split(",");
    data = data.map( (value) => { return { 'load': Number(value) } }); // Array of objects.
    return (
      <div id="graph-wrapper">
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="load" stroke="#8884d8" />
        <YAxis />
      </LineChart>
      </div>)
  }
}
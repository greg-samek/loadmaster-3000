import React from 'react';
import { render } from 'react-dom';

export default class Alert extends React.Component {
  render () {
    return (
      <div className="alert-wrapper">
      {this.props.message}
      </div>
    )
  }
}
import React from 'react';
import { render } from 'react-dom';
import Alert from './Alert';

export default class Alerts extends React.Component {
  render () {
    const alerts = this.props.messages.map( ( message, index ) => <Alert message={message} key={index}></Alert> );
    return (
      <div id="alerts-wrapper">
      {alerts}
      </div>
    )
  }
}
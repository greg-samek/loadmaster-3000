import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component {
  render () {
    const { store, average } = this.props;
    const title = "Load-Master 3000";
    return (
      <div id="header">
      <span>{title}&#8482;</span>
      </div>
    )
  }
}

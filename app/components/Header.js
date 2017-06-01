import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component {
  render () {
    const { store, average } = this.props;
    const title = "Load-Master 3000";
    return (
      <div id="header">
      <img src="https://datadog-live.imgix.net/img/Press-datadog_thumb-150x150.png"/>
      <span>{title}&#8482;</span>
      </div>
    )
  }
}
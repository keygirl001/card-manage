import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import './index.css';

export default class StateStyle extends Component {

  // CLOCK结构
  renderClockState = (isClock) => {
    if (isClock) {
      return (<div className="stateContent">
        <Icon type='lock' theme="filled" />
        <span className="content">锁定</span>
      </div>);
    }
  }

  // PRIVATE结构
  renderPrivateState = (isPrivate) => {
    if (isPrivate) {
      return (<div className="stateContent">
        <Icon type='eye-invisible' theme="filled" />
        <span className="content">私密</span>
      </div>);
    }
  }

  render() {
    const {isClock, isPrivate} = this.props;
    return (
      <div className="stateWrap">
        {this.renderClockState(isClock)}
        {this.renderPrivateState(isPrivate)}
      </div>
    );
  }
}

StateStyle.propTypes = {
  isClock: propTypes.bool,
  isPrivate: propTypes.bool
}

StateStyle.defaultProps = {
  isClock: false,
  isPrivate: false
}

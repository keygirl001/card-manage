import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
// import { stateConstant } from '../../constant/index';
import './index.css';

export default class StateStyle extends Component {

  static propTypes = {
    isClock: propTypes.bool,
    isPrivate: propTypes.bool
  }

  static defaultProps = {
    isClock: false,
    isPrivate: false
  }

  renderClockState = (isClock) => {
    if (isClock) {
      return (<div className="stateContent">
        <Icon type='lock' theme="filled" />
        <span className="content">锁定</span>
      </div>)
    }
  }

  renderPrivateState = (isPrivate) => {
    if (isPrivate) {
      return (<div className="stateContent">
        <Icon type='eye-invisible' theme="filled" />
        <span className="content">私密</span>
      </div>)
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
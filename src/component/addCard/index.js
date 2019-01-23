import React, { Component } from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types';
import './index.css';

export default class AddCard extends Component {

  static propTypes = {
    clickAddNew: propTypes.func
  }

  static defaultProps = {
    clickAddNew: () => {
      alert('确定新建一个项目组！');
    }
  }

  render() {
    return (
      <div className="addCardWarp" onClick={this.props.clickAddNew}>
        <Icon type="plus-circle" theme="filled" className="cardIcon"/>
        <span className="value">新建项目组</span>
      </div>
    );
  }
}
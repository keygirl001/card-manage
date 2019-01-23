import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
// import { stateConstant } from '../../constant/index';
import './index.css';

const menu = (
  <Menu>
    <Menu.Item key="0">
      所有项目组
    </Menu.Item>
    <Menu.Item key="1">
      锁定
    </Menu.Item>
    <Menu.Item key="3">
      私密
    </Menu.Item>
  </Menu>
)

export default class StateSelect extends Component {
  render() {
    return (
      <div className="selectWrap">
        <Dropdown overlay={menu} trigger={['click']}>
          <span className="ant-dropdown-link">
            所有项目组 <Icon type="down" />
          </span>
        </Dropdown>
      </div>
      
    );
  }
}
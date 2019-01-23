import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import './index.css';

export default class StateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '所有项目组'
    }
  }

  // 保证每次刷新hash值和select默认值相同
  componentWillMount() {
    window.location.hash = '#all';
  }

  onhandleClick = (e) => {
    this.setState({
      name: e.key
    });
    // 将选中的select传给app
    this.props.onhandleClickChangeName(e.key);
  }

  render() {
    const menu = (
      <Menu onClick={this.onhandleClick}>
        <Menu.Item key="所有项目组">
          <a href="#all">所有项目组</a>
        </Menu.Item>
        <Menu.Item key="锁定">
          <a href="#clock">锁定</a>
        </Menu.Item>
        <Menu.Item key="私密">
          <a href="#private">私密</a>
        </Menu.Item>
      </Menu>
    )

    const { name } = this.state;

    return (
      <div className="selectWrap">
        <Dropdown overlay={menu} trigger={['click']} >
          <a className="ant-dropdown-link" href="#all">
            {name} <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

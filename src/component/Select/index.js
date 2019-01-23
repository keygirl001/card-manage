import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import propTypes from 'prop-types';
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
    const { menus } = this.props;
    // 设置下拉菜单，所有项目组是默认一定会存在的
    const menu = (
      <Menu onClick={this.onhandleClick}>
        <Menu.Item key="所有项目组">
          <a href="#all">所有项目组</a>
        </Menu.Item>
        {
          menus.map(item => (
            <Menu.Item key={item.name}>
              <a href={item.hash}>{item.name}</a>
            </Menu.Item>
          ))
        }
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

StateSelect.propTypes = {
  menus: propTypes.array
}
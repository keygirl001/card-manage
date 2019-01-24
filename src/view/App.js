import React, { Component } from 'react';
import StateSelect from '../component/Select/index';
import MsenCard from '../component/Card/index';
import AddCard from '../component/addCard/index';
import cardDatas from '../mock/cardData.json';
import { menus } from '../constant/index';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardDatas: cardDatas.data
    }
  }

  // 点击创建
  clickAddNew = () => {
    alert('确定新建一个项目组！');
  }

  setCardDatas = (data) => {
    this.setState({
      cardDatas: data
    });
  }

  // 根据select设置不同的data
  onhandleClickChange = (value) => {
    let data = [];
    switch(value) {
      case '锁定':
        data = cardDatas.data.filter(item => item.isClock);
        this.setCardDatas(data);
        break;
      case '私密':
        data = cardDatas.data.filter(item => item.isPrivate);
        this.setCardDatas(data);
        break;
      default:
        data = cardDatas.data;
        this.setCardDatas(data);
    };
  }

  render() {
    const { cardDatas } = this.state;
    return (
      <div className="App">
        <StateSelect onhandleClickChangeName={this.onhandleClickChange} menus={menus}/>
        <div className="cards" >
          {
            cardDatas && cardDatas.length > 0 && cardDatas.map((item, index) => (
              <MsenCard data={item} key={index}/>
            ))
          }
          <AddCard clickAddNew={this.clickAddNew}/>
        </div>
      </div>
    );
  }
}

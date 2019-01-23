import React, { Component } from 'react';
import StateSelect from '../component/Select/index';
import MsenCard from '../component/Card/index';
import AddCard from '../component/addCard/index';
import cardDatas from '../mock/cardData.json';
import './App.css';

export default class App extends Component {

  clickAddNew = () => {
    alert('确定新建一个项目组！');
  }

  render() {
    return (
      <div className="App">
        <StateSelect />
        <div className="cards" >
        {
          cardDatas.data && cardDatas.data.length > 0 && cardDatas.data.map((item, index) => (
            <MsenCard data={item} key={index}/>
          ))
        }
        <AddCard clickAddNew={this.clickAddNew}/>
        </div>
      </div>
    );
  }
}

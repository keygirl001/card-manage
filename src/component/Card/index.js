import React, { Component } from 'react';
import propTypes from 'prop-types';
import StateStyle from '../State/index';
import './index.css';

export default class MsenCard extends Component {

  render() {
    const { data } = this.props;
    const clockWrap = data.isClock && 'clockWrap'; // 锁定的classname
    return (
      <div className={["cardWarp", clockWrap].join(' ')}>
        <div className="cardAvator" style={{ backgroundColor: data.color }}/>
        <div className="cardContent">
          <div className="cardName">{data.name}</div>
          <StateStyle className="cardState" isClock={data.isClock} isPrivate={data.isPrivate}/>
          <div className="cardNum">
            <span className="num">{data.num}</span>
            <span>项目</span>
          </div>
        </div>
      </div>
    );
  }
}

MsenCard.propTypes = {
  data: propTypes.object
}

MsenCard.defaultProps = {
  data: {
    "name": "墨刀实验室",
    "num": 3,
    "color": "#81D395",
    "isClock": false,
    "isPrivate": false
  }
}
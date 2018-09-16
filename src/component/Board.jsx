import React, { Component } from 'react';
import Filed from './Field';
import '../style/board.css';

export default class Board extends Component {
  render() {
    return (
      <div>
        <h1>this is Board</h1>
        <div className="board-game-field-wrap">
          <Filed/>
          <Filed/>
        </div>
      </div>
    );
  }
}

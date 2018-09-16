import React, { Component } from 'react';

export default class Field extends Component {
  render () {
    return (
      <table className="board-game-field">
        <tbody>
          <tr>
            <td>A</td>
            <td>B</td> 
            <td>C</td>
          </tr>
          <tr>
            <td>e</td>
            <td>J</td> 
            <td>k</td>
          </tr>
          <tr>
            <td>l</td>
            <td>S</td> 
            <td>5</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

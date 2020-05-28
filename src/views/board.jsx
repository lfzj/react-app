import React from 'react';
import Square from './square.jsx';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <div>
        <Square value={i} />
        <div>0009</div>
      </div>
    );
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
      </div>
    );
  }
}

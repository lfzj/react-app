import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home/index.jsx';
import Board from './views/board.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Home name="dddd333"></Home>
        <Board></Board>
      </header>
    </div>
  );
}

export default App;

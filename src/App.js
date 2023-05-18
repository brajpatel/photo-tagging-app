import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Game/>
    </div>
  );
}

export default App;

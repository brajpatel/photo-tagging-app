import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Game from './components/Game';
import diane from "./assets/diane.png";
import patrick from "./assets/patrick.png";
import link from "./assets/link.png";
import noFace from "./assets/no-face.png";
import aang from "./assets/aang.png";

const charData = [
  {
    name: 'Diane',
    id: 'diane',
    image: diane,
    found: false
  },
  {
    name: 'Patrick',
    id: 'patrick',
    image: patrick,
    found: false
  },
  {
    name: 'Link',
    id: 'link',
    image: link,
    found: false
  },
  {
    name: 'No Face',
    id: 'no-face',
    image: noFace,
    found: false
  },
  {
    name: 'Aang',
    id: 'aang',
    image: aang,
    found: false
  },
]

function App() {
  return (
    <div className="app">
      <Sidebar charData={charData}/>
      <Game charData={charData}/>
    </div>
  );
}

export default App;

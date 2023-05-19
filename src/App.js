import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Game from './components/Game';
import diane from "./assets/diane.png";
import patrick from "./assets/patrick.png";
import link from "./assets/link.png";
import noFace from "./assets/no-face.png";
import aang from "./assets/aang.png";

const data = [
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
  const [charData, setCharData] = useState(data);

  return (
    <div className="app">
      <Sidebar charData={charData}/>
      <Game charData={charData} setCharData={setCharData}/>
    </div>
  );
}

export default App;

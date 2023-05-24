import './App.css';
import React, { useEffect, useState } from 'react';
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
    image: diane
  },
  {
    name: 'Patrick',
    id: 'patrick',
    image: patrick
  },
  {
    name: 'Link',
    id: 'link',
    image: link
  },
  {
    name: 'No Face',
    id: 'no-face',
    image: noFace
  },
  {
    name: 'Aang',
    id: 'aang',
    image: aang
  },
]

function App() {
  const [timerActive, setTimerActive] = useState(false);
  const [timerPaused, setTimerPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if(timerActive && timerPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    else {
      clearInterval(interval);
    }

    return (() => {
      clearInterval(interval);
    })

  }, [timerActive, timerPaused])

  return (
    <div className="app">
      <Sidebar
        time={time}
        charData={charData}
      />
      <Game
        setTimerActive={setTimerActive}
        setTimerPaused={setTimerPaused}
        time={time}
        charData={charData}
      />
    </div>
  );
}

export default App;

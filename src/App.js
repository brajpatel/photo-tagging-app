import './App.css';
import React from 'react';
import { useRef } from 'react';
import handleSubmit from './components/Test';

function App() {
  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = "";
  }

  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef}/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;

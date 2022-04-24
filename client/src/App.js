import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Songs from './components/Songs'

function App() {
  return (
    <div className="App">
      <h1> Project - Music - Sharing</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="songs" element={<Songs />}/>
        </Routes>
    </div>
  );
}

export default App;
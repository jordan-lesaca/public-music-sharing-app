import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Songs from './components/Songs'

function App() {
  return (
    <div className="App">
      <h1> Project - Music - Sharing</h1>

        <nav> 
          <Link to="/">Home</Link>
          <br/>
          <Link to="songs">Song</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="songs" element={<Songs />}/>
        </Routes>
        
    </div>
  );
}

export default App;
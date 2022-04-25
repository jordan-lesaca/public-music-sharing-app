import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Songs from './components/Songs'
import Favorites from './components/Favorites'
import MySongs from './components/MySongs'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => { 
    fetch("/me")
    .then((r) => {  
      if (r.ok) { 
        r.json().then((user) => 
          setUser(user))
        }
      })
    }, []);   

  if (!user) return <Login setUser={setUser}/>  

  return (
    <div className="App">
      <h1> Project - Music - Sharing</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="songs" element={<Songs />}/>
          <Route path="mysongs" element={<MySongs />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
    </div>
  );
}

export default App;
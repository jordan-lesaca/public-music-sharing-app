import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Songs from './components/Songs'
import Favorites from './components/Favorites'
import MySongs from './components/MySongs'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [ user, setUser ] = useState(null)
  const [ songs, setSongs ] = useState([])

  useEffect(() => { 
    fetch("/me")
    .then((r) => {  
      if (r.ok) { 
        r.json().then((user) => 
          setUser(user))
        }
      })
    }, []);   

  function addSong(song){
    setSongs(song)
  }

  function onLogout(){
    setUser(null)
  }

  if (!user) return <Login setUser={setUser}/>  

  return (
    <div className="App">
        <NavBar onLogout={onLogout} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="songs" element={<Songs user={user} addSong={addSong} />}/>
          <Route path="mysongs" element={<MySongs addSong={addSong} user={user} />}/>
          <Route path="favorites" element={<Favorites user={user} songs={songs} />}/>
          <Route path="profile" element={<Profile user={user} />}/>
        </Routes>
    </div>
  );
}

export default App;
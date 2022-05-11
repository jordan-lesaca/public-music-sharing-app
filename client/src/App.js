import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Songs from './components/Songs'
import Favorites from './components/Favorites'
import MySongs from './components/MySongs'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

function App() {
  const [ user, setUser ] = useState(null)
  const [ songs, setSongs ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => { 
    setIsLoading(true)
    fetch("/me")
    .then((r) => { 
      setIsLoading(false) 
      if (r.ok) { 
        r.json()
    .then((user) => {
      setUser(user)
    }
      )
        }
      })
    }, []);
  
  function addSong(song){
    setSongs(song)
  }

  function onLogout(){
    setUser(null)
  }

  if (!user) { return ( <div> {(isLoading) ?  <h1> Loading.. </h1> : <Login setUser={setUser}/>} </div> )}
    

  return (
    <div className="App">
        <NavBar onLogout={onLogout} />
        <Routes>
        <Route path="/" element={<Profile user={user}/>}/>
          <Route path="songs" element={<Songs user={user} addSong={addSong} />}/>
          <Route path="mysongs" element={<MySongs addSong={addSong} user={user} />}/>
          <Route path="favorites" element={<Favorites user={user} songs={songs} />}/>
        </Routes>
    </div>
  ) 

  
};

export default App;
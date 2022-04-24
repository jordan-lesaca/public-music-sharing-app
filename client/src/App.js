import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Songs from './components/Songs'

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
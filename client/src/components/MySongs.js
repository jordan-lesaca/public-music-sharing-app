import { useState, useEffect } from 'react'
import MySongCard from '../cards/MySongCard'

function MySongs({ user }){
  const [ songs, setSongs ] = useState([])

  useEffect(() => {
    fetch(`/songs/${user.id}`)
    .then((r) => r.json())  
    .then(songs => setSongs(songs)) 
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      
    <h1 className="page-title">List of {user.username}'s Songs</h1>  
    
      <div className="card-container" > 
        {songs.map(song => 
          <MySongCard key={song.id} user={user} 
          song={song} /> )}
      </div>
    </div>
  )
}

export default MySongs
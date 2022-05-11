import { useState, useEffect } from 'react'
import MySongCard from '../cards/MySongCard'
import AddForm from '../forms/AddForm'

function MySongs({ user, addSong}){
  const [ songs, setSongs ] = useState([])

  function removeSong(song){
    setSongs((songs) => 
    songs.filter(s => s.id !== song.id))
  }
   
  function editSong(song){
    const edited = songs.map(s => {
      if (song.id === s.id){
        return song
          }
        return s
          })
        setSongs(edited)
      }

  useEffect(() => {
    fetch(`/songs/${user.id}`)
    .then((r) => r.json())  
    .then(songs => setSongs(songs)) 
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <div className="AddForm">
        <AddForm user={user} addSong={addSong}/> 
      </div>      
    <h1 className="page-title">List of {user.username}'s Songs</h1>      
      <div className="card-container" > 
        {songs.map(song => 
          <MySongCard key={song.id} user={user} 
          song={song} removeSong={removeSong} 
          editSong={editSong}/>)
        }
      </div>
    </div>
  )
}

export default MySongs
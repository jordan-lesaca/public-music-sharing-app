import {useState, useEffect} from 'react'
import SongCard from '../cards/SongCard'
import AddForm from '../forms/AddForm'

function Songs({ user, addSong, userFaves }){
  const [ songs, setSongs ] = useState([])

  useEffect(() => {
    fetch(`/songs`)
    .then((r) => r.json())
    .then(songs => {setSongs(songs)
    })    
  }, [])

  return (
    <div className="App">  
      <div className="AddForm"> 
        <AddForm 
        user={user}
        addSong={addSong}/>
      </div>  
      <h1 className="page-title">List of Songs</h1>  
      <div className="card-container">
        {songs.map(song =>
        <SongCard 
        key={song.id}
        song={song} 
        user={user}
        addSong={addSong}
        userFaves={userFaves}/>)}
      </div>
    </div>
  )
}

export default Songs
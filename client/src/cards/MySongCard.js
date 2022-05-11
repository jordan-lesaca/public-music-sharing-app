import EditForm from '../forms/EditForm'
import {useState} from 'react'

function MySongCard ({ user, song, removeSong, editSong }){
  const [editForm, setEditForm] = useState(false)
  const [editButton, setEditButton] = useState("Show Edit Form")
  const [isLoading, setIsLoading] = useState(false)

  function handleDelete(e){
    e.preventDefault()
    setIsLoading(true)

    fetch(`/songs/${song.id}`, {
      method: "DELETE"})
      .then(r => {
        setIsLoading(false)
      removeSong(song)
      }
    )
   }
    
  function handleEditButton(){
    setEditForm(!editForm)
    !editForm ? 
    setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
  }

  return(
    <div> 
      {isLoading && <p>Loading...</p>}
      <div className="song-card"> 
        <h1 className="title">"{song.title}"</h1> 
          <p>Artist: {song.artist} {!song.featured_artist ? "" : "ft. " + song.featured_artist}</p>
          <p>Genre: {song.genre}</p>
          <p>Release Year: {song.year}</p>
        <div className="song-card-section">
          <p>Remove Song?
          <button type="submit" onClick={e => handleDelete(e)}>Delete</button></p>
          <p>Edit Song?
          <button onClick={e => handleEditButton()}>{editButton}</button></p>   
        </div> 
      </div>
      <div>
       {editForm ? 
         <EditForm handleEditButton={handleEditButton} 
         editSong={editSong} 
         song={song} 
         key={song.id}
         user={user}/> : null}
      </div>    
    </div>
  )
}

export default MySongCard
import { useState } from 'react'

function SongCard({ user, song }){
  const [ errors, setErrors ] = useState([])
  const [ clicked, setClicked ] = useState("")
  const [ favorites, setFavorites ] = useState([]) 

  function addFavorite(favorite){
    setFavorites(favorite)
  }  

  function handleSubmit(e){
    e.preventDefault()
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        song_id: song.id
      }),
    }).then(r => {
      if (r.ok) { 
        r.json().then(favorite => {
          setClicked( "Added to your favorites!")
          addFavorite(favorite)
        })
        } else {
          r.json().then(err => {
            setErrors(err.errors)
            setClicked("")
          })
        }})
      }

  return (
    <div className="song-card">
      <h1 className="title">"{song.title}"</h1>
        <p>Artist: {song.artist} {!song.featured_artist ? "" : "ft. " + song.featured_artist } </p>
        <p>Genre: {song.genre} </p>
        <p>Release Year: {song.year} </p>
        <p>Posted By: {song.posted_by} </p>
      <form className="song-card-section">
        <p>Add to favorites?</p>
        <button type="submit" onClick={handleSubmit}>Favorite</button>
      </form>
      <p className="errors">{errors}</p> 
      <p> {clicked}</p>
    </div>
    )
  }

export default SongCard
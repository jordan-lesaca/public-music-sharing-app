import { useState } from 'react'

function AddForm({ user, addSong }){
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [featured_artist, setFeatured_Artist] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState(0)
  const [errors, setErrors] = useState([])

  function handleSubmit(){
    setTitle("")
    setArtist("")
    setFeatured_Artist("")
    setGenre("")
    setYear(0)

    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title, artist, featured_artist,
        genre, year,
        posted_by: user.username,
        user_id: user.id
        }),
      }).then(r => {
        if (r.ok) { 
          r.json().then(song => {
            addSong(song)
          })
        } else {
            r.json().then(err => 
            setErrors(err.errors))
          }
        })
      }

  return (
    <div className="form-container">
      <h1 className="form-header">Add a Song:</h1>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <label> Title: </label>
          <input type="text" id="title" 
          value={title} 
          onChange={e => setTitle(e.target.value)}/>
          <br/>
        <label>Artist: </label>
          <input type="text" id="artist" 
          value={artist} 
          onChange={e => setArtist(e.target.value)}/>
          <br/>
        <label>Featured Artist: </label> 
          <input type="text" id="featured_artist" 
          value={featured_artist} 
          onChange={e => setFeatured_Artist(e.target.value)}/>
          <br/>
        <label> Genre: </label>
          <input type="text" id="genre" 
          value={genre} 
          onChange={e => setGenre(e.target.value)}/>
          <br/>
        <label> Release Year: </label>
          <input type="number" id="year" 
          value={year} 
          onChange={e => setYear(e.target.value)}/>
          <br/>
          <br/>
        <button type="submit"> Submit </button>
          <br/> <br/> <p className="errors">{errors}</p>
      </form>
    </div>
  )
}
export default AddForm
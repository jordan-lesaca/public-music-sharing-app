import {useState} from "react"

function EditForm({song, user, editSong, handleEditButton}){
  const [title, setTitle] = useState(song.title)
  const [artist, setArtist] = useState(song.artist)
  const [featured_artist, setFeatured_Artist] = useState(song.featured_artist)
  const [genre, setGenre] = useState(song.genre)
  const [year, setYear] = useState(song.year)


  function handleSubmit(){
    setTitle("")
    setArtist("")
    setFeatured_Artist("")
    setGenre("")
    setYear(0) 

    fetch(`/songs/${song.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title, artist, featured_artist, genre, year, 
        user_id: user.id
      }),
    })
      .then(r => r.json())
      .then(s => {
        editSong(s)
        handleEditButton()
      })
    }

    return (
      <div className="edit-form-container">
        <h1 className="form-header">Edit Form:</h1>
        <form className="form" onSubmit={handleSubmit}>
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
          <br/> <br/> 
        </form>
      </div>
    )
  }

export default EditForm
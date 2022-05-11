function FavoriteCard({favorite, song, removeFave}){

  function handleDelete(e){
    e.preventDefault()
    fetch(`/favorites/${favorite.id}`, {
      method: "DELETE"})
      .then(removeFave(favorite))
    }
  
  if (song.length === 0) return (  
    <div>  
      <h1> There's nothing here! :( </h1>
    </div> )
  else   
    return (
      <div className="song-card"> 
        <h1 className="title">{song.title} </h1>
          <p>Artist: {song.artist} {!song.featured_artist ? "" : "ft. " + song.featured_artist } </p>
          <p>Genre: {song.genre} </p>
          <p>Release Year: {song.year} </p> 
        <form className="song-card-section" onSubmit={e => handleDelete(e)}>
          <p>Remove from favorites?</p>
          <button type="submit">Remove</button>
        </form >
      </div>
      )
    }
      
  export default FavoriteCard
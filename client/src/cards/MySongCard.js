import {useState} from 'react'

function MySongCard ({ user, song }){

  return(
    <div> 
      <div className="song-card"> 
        <h1 className="title">"{song.title}"</h1> 
          <p>Artist: {song.artist} {!song.featured_artist ? "" : "ft. " + song.featured_artist}</p>
          <p>Genre: {song.genre}</p>
          <p>Release Year: {song.year}</p>
      </div>
    </div>
  )
}

export default MySongCard
import {useState, useEffect} from 'react'
import FavoriteCard from '../cards/FavoriteCard'

function Favorites(){
  const [ favorites, setFavorites ] = useState([])

  useEffect(() => {
    fetch(`/favorites`,)
    .then(r => r.json())
    .then(favorites => {
      setFavorites(favorites)})
  }, [])           

  function removeFave(favorite){
    setFavorites((favorites)=> 
    favorites.filter(f => f.id !== favorite.id))
  }

  if (favorites.length === 0) 

  return (
    <div className="page-title"> 
      <h3> No favorites yet! </h3>
    </div> )
  else 

  return (
    <div className="App">
      <h1 className="page-title">Your Favorites</h1>
        <div className="card-container">  
          {favorites.map(favorite => 
            <FavoriteCard favorite={favorite} 
            song={favorite.song}
            key={favorite.id} removeFave={removeFave} /> )}  
        </div>                        
    </div>
  )
}

export default Favorites
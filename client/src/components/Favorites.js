import { useState, useEffect } from 'react'
import FavoriteCard from '../cards/FavoriteCard'

function Favorites(){
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        fetch(`/favorites`)
        .then(r => r.json())
        .then(favorites => setFavorites(favorites))
      }, [])         

    return (
        <div>
            <h1 className="page-title">Your Favorites</h1>
            <div className="card-container">  
                {favorites.map(favorite => 
                <FavoriteCard favorite={favorite} 
                song={favorite.song}
                key={favorite.id} /> )}  
            </div>   
        </div>
    )
}

export default Favorites
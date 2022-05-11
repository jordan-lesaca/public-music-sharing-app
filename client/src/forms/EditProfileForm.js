import { useState } from 'react'

function EditProfileForm({ user, profile, handleEditButton, editProfile }){
  const [ name, setName ] = useState(profile.name)
  const [ favorite_genre, setFavorite_Genre ] = useState(profile.favorite_genre)
  const [ pronouns, setPronouns ] = useState(profile.pronouns)

  function handleSubmit(){
    setName("")
    setFavorite_Genre("")
    setPronouns("")
    
    fetch(`/profiles/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name, favorite_genre,
          pronouns,
          user_id: user.id
        }),
      })
        .then(r => r.json())
        .then(p =>  { 
          handleEditButton() 
          editProfile(p)
      })
    }

  return(
    <div className="form-container">
      <h1 className="form-header">Edit Form:</h1>
      <form className="form" onSubmit={e => handleSubmit(e)} >
        <label>Name: </label>
          <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={e =>
          setName(e.target.value)}/> 
          <br/>
        <label className="login-label">Favorite Genre: </label>
          <input 
          type="text" 
          id="favorite_genre" 
          value={favorite_genre} 
          onChange={e =>
          setFavorite_Genre(e.target.value)}/> 
          <br/>
        <label>Pronouns: </label>
          <input 
          type="text" 
          id="pronouns" 
          value={pronouns} 
          onChange={e =>
          setPronouns(e.target.value)}/> 
          <br/>
        <button className="button" type="submit" > Submit </button>
        <br/><br/> 
      </form>
    </div>
    )
  }

export default EditProfileForm
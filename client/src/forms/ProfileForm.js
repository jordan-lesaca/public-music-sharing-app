import React, { useState } from "react"

function ProfileForm({user, addProfile}){
  const [ name, setName ] = useState("")
  const [ favorite_genre, setFavorite_Genre ] = useState("")
  const [ pronouns, setPronouns ] = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit() {
    setName("")
    setFavorite_Genre("")
    setPronouns("")

    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        favorite_genre,
        pronouns,
        user_id: user.id
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(profile => 
          addProfile(profile))
      } else {
        r.json().then(err => 
          setErrors(err.errors))
      }
    })
  }

  return(
    <div className="form-container">
      <h1 className="h1-container">Profile Form:</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label > name: </label>
            <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={e =>
            setName(e.target.value)}/> 
            <br/>
          <label className="login-label"> favorite genre: </label>
            <input 
            type="text" 
            id="favorite_genre" 
            value={favorite_genre} 
            onChange={e =>
            setFavorite_Genre(e.target.value)}/> 
            <br/>
          <label > Pronouns: </label>
            <input 
            type="text" 
            id="pronouns" 
            value={pronouns} 
            onChange={e =>
            setPronouns(e.target.value)}/> 
            <br/>
          <button className="button" type="submit"> Submit </button>
            <br/><br/> <p className="errors">{errors} {console.log(errors)}</p>
        </form>
    </div>
  )
}

export default ProfileForm
function ProfileCard({user, profile, editButton, handleEditButton}){

  return(
    <div>
      <div className="container">
        <h1 className="profile-form-header">{user.username}</h1>    
          <p>Name: {profile.name}</p>  
          <p>Favorite Genre: {profile.favorite_genre}</p>  
          <p>Pronouns: {profile.pronouns}</p><p></p>
          <button onClick={e => handleEditButton(e)}>{editButton}</button>
      </div>
    </div>
  )
}

export default ProfileCard
import { useState, useEffect } from 'react'
import ProfileCard from '../cards/ProfileCard'
import ProfileForm from '../forms/ProfileForm'
import EditProfileForm from '../forms/EditProfileForm'

function Profile({ user }){
  const [ profile, setProfile ] = useState([])
  const [ editButton, setEditButton ] = useState("Show Edit Form")
  const [ editForm, setEditForm ] = useState(false)

  function addProfile(profile){
    setProfile(profile)
  }

  function handleEditButton(){
    setEditForm(!editForm)
    !editForm ? 
    setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
  }

  function editProfile(p){
    if (profile.id === p.id){
      return profile
      }
      setProfile(p)
    }

  useEffect(() => {
    fetch(`profiles/${user.id}`,)
    .then(r => r.json())
    .then(profile => setProfile(profile)) 
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps


  if (!user.profile) return <ProfileForm user={user} addProfile={addProfile} />

  return (
    <div>
      <h1 className="page-title">Your Profile</h1>
        <ProfileCard user={user} 
        profile={profile} 
        handleEditButton={handleEditButton} 
        editButton={editButton}/> 
      <div>
        {editForm ?
          <EditProfileForm 
          handleEditButton={handleEditButton}
          setEditForm={setEditForm}
          editProfile={editProfile}
          profile={profile}
          key={profile.id}
          user={user}/> : null}
      </div>
    </div>
  )
}

export default Profile
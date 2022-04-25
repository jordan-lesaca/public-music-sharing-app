import { useState, useEffect } from 'react'
import ProfileCard from '../cards/ProfileCard'

function Profile({ user }){
  const [ profile, setProfile ] = useState([])

  useEffect(() => {
    fetch(`profiles/${user.id}`,)
    .then(r => r.json())
    .then(profile => setProfile(profile)) 
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="page-title">Profile Page</h1>
        <ProfileCard user={user} 
        profile={profile} />
    </div>
  )
}

export default Profile
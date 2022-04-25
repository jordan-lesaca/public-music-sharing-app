import { NavLink } from 'react-router-dom'

function NavBar(){

  return(
    <div className="NavBar">
      <NavLink style={{ marginRight: '10px'}} to='/'>Profile</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/songs'>Songs</NavLink> 
      <NavLink style={{ marginRight: '10px'}} to='/mysongs'>MySongs</NavLink> 
      <NavLink style={{ marginRight: '10px'}} to='/favorites'>Favorites</NavLink> 
      <NavLink style={{ marginRight: '10px'}} to='/'> Logout </NavLink>
    </div>
  )
}

export default NavBar
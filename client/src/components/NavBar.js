import { NavLink } from 'react-router-dom'

function NavBar({ onLogout }){

  function handleLogout(){
      fetch("/logout", {
          method: "DELETE", 
      })
      .then(() => onLogout())
  }

  return(
    <div className="NavBar">
      <NavLink style={{ marginRight: '10px'}} to='/'>Home</NavLink>
      <NavLink style={{ marginRight: '10px'}} to='/songs'>Songs</NavLink> 
      <NavLink style={{ marginRight: '10px'}} to='/mysongs'>My Songs</NavLink> 
      <NavLink style={{ marginRight: '10px'}} to='/favorites'>Favorites</NavLink> 
      <NavLink onClick={handleLogout} style={{ marginRight: '10px'}} to='/'> Logout </NavLink>
    </div>
  )
}

export default NavBar
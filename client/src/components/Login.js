import SignupForm from '../forms/SignupForm'
import LoginForm from '../forms/LoginForm'
import { useState } from 'react'
import NavBar from '../components/NavBar'

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>  
      {showLogin ? (
        <>
          <NavBar />
          <LoginForm setUser={setUser} />
          <p className="form-container">
            Don't have an account? 
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <NavBar />
          <SignupForm setUser={setUser} />
          <p className="form-container">
            Already have an account? 
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
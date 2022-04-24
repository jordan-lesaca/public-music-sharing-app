import React, { useState } from "react"

function SignupForm({setUser}){
  const [ username, setUsername ] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => 
          setUser(user),
        );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return(
    <div className="form-container">
      <h1 className="form-header">Signup:</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label > Username: </label>
            <input 
            type="text" 
            id="username" 
            autoComplete="off"
            value={username} 
            onChange={e =>
            setUsername(e.target.value)}/> 
            <br/>
          <label className="login-label"> Password: </label>
            <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={e =>
            setPassword(e.target.value)}
            autoComplete="current-password"/> 
            <br/>
          <label className="login-label" > Password Confirmation: </label>
            <input 
            type="password" 
            id="password_confirmation" 
            value={passwordConfirmation} 
            onChange={e =>
            setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"/> 
            <br/>
          <button className="button" type="submit" > Submit </button>
          <br/><br/> <p className="errors">{errors}</p>
        </form>
    </div>
    )
  }
export default SignupForm
import { useState } from "react"

function LoginForm({ setUser }) {
  const [ username, setUsername] = useState("")
  const [ password, setPassword] = useState("")
  const [ errors, setErrors ] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username, password 
      }), 
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors)) 
      }
    });
  }

  return (
    <div className="form-container">
      <h1 className="form-header">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label> Username: </label>
          <input 
          type="text" 
          id="username" 
          autoComplete="current-username"
          value={username} 
          onChange={e =>
          setUsername(e.target.value)}/>
          <br/>
        <label> Password: </label>
          <input 
          type="password" 
          id="password" 
          autoComplete="current-password"
          value={password} 
          onChange={e =>
          setPassword(e.target.value)}/>
          <br/>
        <button type="submit"> Login </button>
          <br/><br/><p className="errors">{errors}</p>
      </form>
    </div>
  );
}

export default LoginForm;
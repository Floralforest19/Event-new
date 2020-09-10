import React from "react";
//import react from 'react'
//import { useRef } from 'react'

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/1v/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login() {
    const payload = {
      email: email,
      password:password
    }
    //Samma som const payload = {email, password}
    fetch(LOGIN_URL,{
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body:JSON.stringify(payload)
    })
  }
  return (
    <div>
      <h1>Event app </h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="john.doe@company.com"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;

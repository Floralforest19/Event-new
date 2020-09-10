import React from 'react';


function App() {

  function login(){
    fetch()
  }
  return (
    <div>
      <h1>Event app </h1> 
      <div>
        <div>
        <label>Email</label>
        <input name="email" placeholder="john.doe@company.com"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;

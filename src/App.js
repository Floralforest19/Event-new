import React, { useState } from "react";
import { Switch, Route } from 'react-route-dom'

import LoginPage from "./Pages/LoginPage";
import EventListPage from "./Pages/EventListPage";



function App(){
  const [token, setToken]= useState(null)
  return (
    <div>
      <Switch>

        <Route path="/event-list">
          <EventListPage token={token} setToken={setToken}/>
        </Route>

        <Route path="/">
     <LoginPage token={token} setToken={setToken}/>
        </Route>

        </Switch>
    </div>
  );
}

export default App;

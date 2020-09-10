import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'

import LoginPage from "./Pages/LoginPage";
import EventListPage from "./Pages/EventListPage";
import { UserContext } from "./context/UserContext";



function App(){
  const [token, setToken] = useState(null)

  return (
    <div>
      <UserContext.Provider value={{token, setToken}}>
      <Switch>

        <Route path="/event-list">
          <EventListPage />
        </Route>

        <Route path="/">
     <LoginPage />
        </Route>

        </Switch>
        </UserContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useAuth } from './auth/UseAuth';


import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";


import useAuth from './auth/UseAuth';
import SignInForm from './auth/SignInForm';
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
  const {isLoading, user } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-in' component={SignInForm} />
        <Route path='/sign-up' />
        <Route path='/subscribe' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/home' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/shop' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/profile/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/news' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/about' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/store' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/inspiration' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/collections/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='prior/collections/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/shop/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/lookbook/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/checkout' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

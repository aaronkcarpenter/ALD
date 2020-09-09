import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthed, isLoading, ...props }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return <Redirect to='/sign-in' />
  }

  return (
    <Route {...props} />
  );
}

export default ProtectedRoute;
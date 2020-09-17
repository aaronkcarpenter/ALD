import { useState, useEffect } from 'react';
import { getCurrentUser } from './GetCurrentUser'
import { addAuthListener } from './AddAuthListener'

const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getCurrentUser();
    const isLoading = !user;
    return { isLoading, user };
  })

  useEffect(() => {
    const unsubscribe = addAuthListener(user => {
      setAuthInfo({ isLoading: false, user });
    })
    return unsubscribe;
  }, []);
  return authInfo;
}

export default useAuth
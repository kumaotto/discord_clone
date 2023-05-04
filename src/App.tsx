import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {

  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(loginUser => {
      console.log(loginUser)
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          image: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }));
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="flex">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;

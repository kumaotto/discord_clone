import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { useAppSelector } from './app/hooks';

function App() {

  const user = useAppSelector((state) => state.user)

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

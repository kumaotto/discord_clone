import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';

function App() {

  // const user = useSelector((state) => state.user.user)
  const user = null;

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

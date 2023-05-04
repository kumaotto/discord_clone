import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).catch(err => {
      alert(err.message);
    });
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-8'>
      <div>
        <img className='w-28' src="./discordIcon.png" alt="discord" />
      </div>
      <button onClick={signIn} className='w-44 bg-indigo-400 text-white font-semibold hover:bg-indigo-900 hover:text-indigo-400 h-7'>Login</button>
    </div>
  )
}

export default Login
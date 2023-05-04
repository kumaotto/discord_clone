import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-8'>
      <div>
        <img className='w-28' src="./discordIcon.png" alt="discord" />
      </div>
      <button className='w-44 bg-indigo-400 text-white font-semibold hover:bg-indigo-900 hover:text-indigo-400 h-7'>Login</button>
    </div>
  )
}

export default Login
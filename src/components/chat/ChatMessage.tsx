import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className='flex item-center p-2.5 text-white mb-2'>
      <AccountCircleIcon />
      <div className='item-center ml-2'>
        <h4>
          UserName
          <span className='text-gray-500 ml-3 text-sm'>2023/04/01</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
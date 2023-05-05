import React from 'react'
import { Timestamp } from 'firebase/firestore';
import { Avatar } from '@mui/material';

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    image: string;
    email: string;
    displayName: string;
  }
}

const ChatMessage = (props: Props) => {
  const { message, timestamp, user } = props;
  return (
    <div className='flex item-center p-2.5 text-white mb-2'>
      <Avatar src={user?.image} />
      <div className='item-center ml-2'>
        <h4>
          {user?.displayName}
          <span className='text-gray-500 ml-3 text-sm'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
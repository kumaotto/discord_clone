import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className='flex items-center justify-between pt-2.5'>
      <div className='pl-4'>
        <h3 className='text-white'>
          <span className='text-gray-400 pr-1'>#</span>
          Text
        </h3>
      </div>

      <div className='pr-4 flex items-center gap-3 text-gray-400'>
        <NotificationsIcon className='cursor-pointer'/>
        <PushPinIcon className='cursor-pointer'/>
        <GroupIcon className='cursor-pointer'/>

        <div className='flex items-center bg-gray-800 rounded-sm'>
          <input className='px-1 bg-transparent text-sm outline-none text-white border-none' type="text" placeholder='検索'/>
          <SearchIcon />
        </div>

        <SendIcon className='cursor-pointer'/>
        <HelpIcon className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default ChatHeader
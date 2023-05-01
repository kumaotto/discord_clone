import React from 'react'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';

const Chat = () => {
  return (
    <div className='flex flex-col flex-grow bg-chat'>
      <ChatHeader />

      <div className='flex-grow'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      <div className='flex item-center justify-between p-4 bg-chat-input rounded-md m-5 text-gray-200'>
        <AddCircleOutlineIcon />
        {/* textareaに変更する */}
        <form className='flex-grow' action="">
          <input className='px-2 bg-transparent text-white break-words w-full' type="text" placeholder='#Textへメッセージを送信'/>
          <button className='hidden' type='submit'>送信</button>
        </form>

        <div>
          <CardGiftcardIcon className='p-1' />
          <GifBoxIcon className='p-1' />
          <InsertDriveFileIcon className='p-1' />
          <EmojiEmotionsIcon className='p-1' />
        </div>
      </div>
    </div>
  )
}

export default Chat
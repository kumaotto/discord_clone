import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

const Chat = () => {

  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector(state => state.channel.channelId)
  const channelName = useAppSelector(state => state.channel.channelName);
  const user = useAppSelector(state => state.user.user)
  const {subDocuments: messages} = useSubCollection("channels", "messages");

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    })
    setInputText("")
  }

  return (
    <div className='flex flex-col flex-grow bg-chat h-screen'>
      <ChatHeader channelName={channelName} />

      <div className='flex-grow overflow-y-scroll'>
        {/* TODO: messageIdをkeyにする */}
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>

      <div className='flex item-center justify-between p-4 bg-chat-input rounded-md m-5 text-gray-200'>
        <AddCircleOutlineIcon />
        <form className='flex-grow' action="">
          <input
            className='px-2 bg-transparent text-white break-words w-full outline-none'
            type="text"
            placeholder='#Textへメッセージを送信'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className='hidden'
            type='submit'
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
          >
            送信
          </button>
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
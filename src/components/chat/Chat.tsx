import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, Timestamp, addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    image: string;
    email: string;
    displayName: string;
  }
}

const Chat = () => {

  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector(state => state.channel.channelName);
  const channelId = useAppSelector(state => state.channel.channelId)
  const user = useAppSelector(state => state.user.user)

  useEffect(() => {
    let collectionRef = collection(db, "channels", String(channelId), "messages");
    
    onSnapshot(collectionRef, (snapshot) => {
      let result: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setMessages(result)
      console.log(result)
    })
  }, [channelId]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
  }

  return (
    <div className='flex flex-col flex-grow bg-chat'>
      <ChatHeader channelName={channelName} />

      <div className='flex-grow'>
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
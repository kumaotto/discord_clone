import { DocumentData } from 'firebase/firestore'
import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

type Props = {
  id: string,
  channel: DocumentData,
}

const SidebarChannel = (props: Props) => {
  
  const {id, channel} = props;
  const dispatch = useAppDispatch();

  return (
    <div className='pl-4 m-1' onClick={() =>
      dispatch(setChannelInfo({
        channelId: id,
        channelName: channel.channel.channelName,
        })
      )}>
      <h4 className='text-gray-500 flex items-center p-1 cursor-pointer hover:text-white'>
        <span className='mr-1'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel
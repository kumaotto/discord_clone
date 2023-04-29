import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='flex flex-0.35 h-screen'>
        <div className='flex flex-col items-center px-2 py-4 w-20 bg-sidebar'>
          <div className='rounded-full bg-neutral-400 mb-4'>
            <img src="./logo192.png" className='' alt="" />
          </div>
          <div className='rounded-full bg-neutral-400'>
            <img src="./logo512.png" className='' alt="" />
          </div>
        </div>

        <div className="bg-side-menu w-72 flex flex-col justify-between flex-grow">
          <div>
            <div className='text-white flex items-center px-5 py-5 justify-between'>
              <h3>Discord</h3>
              <ExpandMoreIcon />
            </div>
            
            <div className='px-3'>
              <div className='flex justify-between mt-1 text-white items-center'>
                <div className='flex'>
                  <ExpandMoreIcon />
                  <h4>プログラミングチャンネル</h4>
                </div>
                <AddIcon className='cursor-pointer' />
              </div>

              <div>
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
              </div>
            </div>
          </div>

          <div>
            <div></div>

            <div></div>

            <div className='flex bg-neutral-800 text-white justify-between items-center'>
              <div className='flex items-center p-2'>
                <div className='w-12 h-12 rounded-full bg-white overflow-hidden'>
                  <img className='w-12 h-12 object-contain' src="./icon1.png" alt="" />
                </div>
                <div className='h-fit px-2'>
                  <h4 className='font-bold leading-4'>Hand</h4>
                  <p className='text-gray-400 leading-4'>#111</p>
                </div>
              </div>

              <div className='p-4'>
                <MicIcon />
                <HeadphonesIcon className='ml-2' />
                <SettingsIcon className='ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
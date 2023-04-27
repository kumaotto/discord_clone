import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

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

        <div className="bg-side-menu w-72">
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

      </div>
    </div>
  )
}

export default Sidebar
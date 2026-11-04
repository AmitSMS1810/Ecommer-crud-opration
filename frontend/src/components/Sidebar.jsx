import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {

  const menuItems = [
    { name: 'Users', link: '/users' },
    { name: 'Business Overview', link: '/business-overview' },
    { name: 'Accounts', link: '/accounts' },
  ];
  
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user_data')) || null);
  return (
    <>
      <div>
        <h2 className='text-lg font-semibold mb-4'>Sidebar</h2>
        {/* <ul>
        
          <li><button className='text-blue-500 hover:underline'>Users</button></li>
          <li><button className='text-blue-500 hover:underline'>Bussiness Overview</button></li>
          <li><button className='text-blue-500 hover:underline'>Accounts</button></li>
        </ul> */}

        <div className='flex flex-col space-y-2'>
          {menuItems.map((item) => (
           <div key={item.name} className='flex items-center space-x-2'>
            <NavLink
              to={item.link}
              className='text-blue-500 hover:underline text-left'
            >
              {item.name}
            </NavLink>
           </div>
          ))}
        </div>

        <div className='mt-4 p-4 border-t border-gray-300'>
          <div className='mt-4 '>

          <div>
            <p className='font-medium'  > {userData?.user_metadata?.name}</p>
            <p className='font-medium'> {userData?.user_metadata?.email}</p>
          </div>
        </div>

        <div
          onClick={() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_data');
            alert('User logged out successfully!');
            window.location.reload();
          }}
          className='mt-4 cursor-pointer text-red-500 hover:underline flex items-center space-x-2'>
          <span>Logout</span>
        </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

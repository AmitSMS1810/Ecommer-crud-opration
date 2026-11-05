import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Router } from 'react-router-dom'
import RouterPage from './RouterPage'
import UserList from './UserList'
import axios from 'axios'

function AfterLoginScreen() {
   const portUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    const [noOfUsers, setNoOfUsers] = useState(0);

    const totalUsers = async () => {
        try{
     const res = await axios.get(`${portUrl}/user/total-users`);
     setNoOfUsers(res.data.totalUsers);
        }
        catch(error){
            console.error('Error fetching user count:', error);
        }
        
    }

    useEffect(() => {
        totalUsers();
    }, []);
    return (
        <div>
            <div className='flex justify-between items-center p-4 bg-green-200'>
                <div>
                    <span className='font-bold '>Ecommerce Admin Dashboard</span>
                </div>
                <div className='flex space-x-4'>
                    <span className='font-semibold'>User Count: {noOfUsers}</span>
                    <span className='font-semibold'>Active Users: 0</span>
                    <span className='font-semibold'>Blocked Users: 0</span>
                </div>
            </div>
            <div className='flex space-x-4'>
                <div className='w-1/5 bg-gray-100 p-4 rounded-md h-screen'>
                    <Sidebar />
                </div>
                <div className='w-3/4'>
                    {/* <UserList/> */}
                    <RouterPage />
                </div>
            </div>
        </div>
    )
}

export default AfterLoginScreen

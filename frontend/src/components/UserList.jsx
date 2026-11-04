import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from 'react-icons/rx';
import UserCreate from './UserCreate';


function UserList() {
    const [users, setUsers] = useState([]);
    const [showUser, setShowuser] = useState(false);
    const [editUser, setEditUser] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/user/get-users');
            const data = response.data.data;
            console.log('Fetched users:', data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/user/delete-user/${id}`);
            console.log('User deletion response:', response.data);
            alert('User deleted successfully!');
            fetchUsers(); // Refresh the user list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <div>
                <div className='flex justify-between items-center py-10'>
                    <h2 className='text-2xl font-bold mb-4'>User List</h2>
                    <button onClick={() => setShowuser(true)} className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>Add User</button>
                </div>
                <table className='min-w-full bg-white border border-gray-300'>
                    <thead>
                        <tr>
                            <th className='py-2 px-4 border-b'>Username</th>
                            <th className='py-2 px-4 border-b'>Mobile</th>
                            <th className='py-2 px-4 border-b'>City</th>
                            <th className='py-2 px-4 border-b'>State</th>
                            <th className='py-2 px-4 border-b'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className='py-2 px-4 border-b'>{user.name}</td>
                                <td className='py-2 px-4 border-b'>{user.mobile}</td>
                                <td className='py-2 px-4 border-b'>{user.city}</td>
                                <td className='py-2 px-4 border-b'>{user.state}</td>
                                <td className='py-2 px-4 border-b'>
                                    <button onClick={() => (setShowuser(true), setEditUser(user))} className='bg-blue-500 text-white py-1 px-2 rounded'><MdOutlineModeEditOutline /></button>
                                    <button onClick={() => deleteUser(user.id)} className='bg-red-500 text-white py-1 px-2 rounded ml-2'><RiDeleteBin6Line /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {
                showUser && <div className='fixed inset-0 backdrop-brightness-50 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-md max-w-xl w-full'>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-2xl font-bold mb-4'>{editUser ? 'Edit User' : 'Add User'}</h1>
                            <button onClick={() => (setShowuser(false), window.location.reload())} className='bg-red-500 px-3 py-1 rounded-md text-white font-bold mb-4'><RxCross2 /></button>
                        </div>
                        <UserCreate onclose={() => setShowuser(false)} editUser={editUser} />
                    </div>
                </div>
            }
        </>
    );
}

export default UserList

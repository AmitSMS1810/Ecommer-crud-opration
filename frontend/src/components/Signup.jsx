import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Signup({ onclose }) {
    const portUrl = process.env.PORT || 'http://localhost:4000';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${portUrl}/auth/signup`, formData);
            alert('User created successfully!');
            console.log('Signup response:', response.data);
            onclose();
        } catch (error) {
            console.error('Error during signup:', error);
        }
        setLoading(false);
    };  
    return (
        <>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name">Enter user Name:</label>
                        <input type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder='Enter User name' 
                        className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email">Enter User Email:</label>
                        <input type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder='User email' 
                        className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">Enter User Password:</label>
                        <input type="password" 
                        id="password" 
                        name="password" 
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder='Strong password........' 
                        className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <button type="submit" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md' disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup

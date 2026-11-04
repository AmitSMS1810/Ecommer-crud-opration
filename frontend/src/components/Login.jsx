import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Login({ onclose }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
      try {
        const response = await axios.post('http://localhost:4000/auth/login', formData);
        alert('User logged in successfully!');
        console.log('Login response:', response.data);
        const accessToken = response.data.data.session.access_token;
        const userdata = response.data.data.user;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('user_data', JSON.stringify(userdata));
        window.location.reload();
        console.log('Access token stored in localStorage:', accessToken);
        onclose();
      } catch (error) {
        console.error('Error during login:', error);
      }
      setLoading(false);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
  )
}

export default Login

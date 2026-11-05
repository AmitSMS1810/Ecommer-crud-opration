import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserCreate({ onclose, editUser }) {
    const portUrl = process.env.PORT || 'http://localhost:4000';
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: '',
        state: ''
    });

    console.log('Edit user data:', editUser);

    useEffect(() => {
        if (editUser) {
            setFormData({
                name: editUser.name || '',
                mobile: editUser.mobile || '',
                city: editUser.city || '',
                state: editUser.state || ''
            });
        }
    }, [editUser]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try{
            if (editUser) {
                const response = await axios.put(`${portUrl}/user/update-user/${editUser.id}`, formData);
                alert('User updated successfully!');
                console.log('User submission response:', response.data);
            } else {
                const response = await axios.post(`${portUrl}/user/create-user`, formData);
                alert('User created successfully!');
                console.log('User submission response:', response.data);
            }
            
            onclose();
        } catch (error) {
            console.error('Error during user creation:', error);
        }
        setLoading(false);
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center mb-4'>
            <label htmlFor="name">Name:</label>
            <input type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder='Enter name'
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <div className='flex justify-between items-center mb-4'>
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" 
            id="mobile" 
            name="mobile" 
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
            placeholder='Enter mobile'
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <div className='flex justify-between items-center mb-4'>
            <label htmlFor="city">City:</label>
            <select id="city" name="city" value={formData.city} 
            onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="">Select city</option>
                <option value="varanasi">Varanasi</option>
                <option value="lucknow">Lucknow</option>
                <option value="sawantwadi">Sawantwadi</option>
            </select>
        </div>
        <div className='flex justify-between items-center mb-4'>
            <label htmlFor="state">State:</label>
            <select id="state" name="state" 
            value={formData.state} 
            onChange={(e) => setFormData({ ...formData, state: e.target.value })} 
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="">Select state</option>
                <option value="up">Uttar Pradesh</option>
                <option value="mp">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
            </select>
        </div>
        <div className='flex justify-between items-center mb-4'>
            <button type="submit" className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md'>
                {editUser ? (loading ? 'Updating...' : 'Update') : (loading ? 'Submitting...' : 'Submit')}
            </button>  
        </div>
    </form>
    </div>
  )
}

export default UserCreate;

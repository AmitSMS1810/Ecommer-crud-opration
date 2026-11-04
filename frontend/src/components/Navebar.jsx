import React from 'react'
import { useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import { RxCross2 } from "react-icons/rx";


function Navebar() {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <div className="bg-blue-400 flex justify-between items-center p-4">
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => setShowLogin(true)} className='bg-yellow-500 px-3 py-1 rounded-md text-white font-bold'>Login</button>
                    <button onClick={() => setShowSignup(true)} className='bg-green-500 px-3 py-1 rounded-md text-white font-bold'>Signup</button>
                </div>
            </div>
              {
                showLogin && <div className='fixed inset-0 backdrop-brightness-50 flex justify-center items-center'>
                    <div className='bg-white p-4 rounded-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-2xl font-bold mb-4'>Login</h1>
                            <button onClick={() => setShowLogin(false)} className='bg-red-500 px-3 py-1 rounded-md text-white font-bold mb-4'><RxCross2 /></button>
                        </div>
                          <Login onclose={() => setShowLogin(false)} />
                    </div>
                </div>
            }

            {
                showSignup && <div className='fixed inset-0 backdrop-brightness-50 flex justify-center items-center'>
                    <div className='bg-white p-4 rounded-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-2xl font-bold mb-4'>Signup</h1>
                            <button onClick={() => setShowSignup(false)} className='bg-red-500 px-3 py-1 rounded-md text-white font-bold mb-4'><RxCross2 /></button>
                        </div>
                          <Signup onclose={() => setShowSignup(false)} />
                    </div>
                </div>
            }
        </>
    )
}

export default Navebar

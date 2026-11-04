import React, { useEffect, useState } from 'react'
import Navebar from './components/Navebar'
import AfterLoginScreen from './components/AfterLoginScreen';

function App() {

  const [token, setToken] = useState(localStorage.getItem('access_token') || null);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);
  return (
   <>
   {
    token ? <AfterLoginScreen /> :  <Navebar/>
   }
   
   </>
  )
}

export default App

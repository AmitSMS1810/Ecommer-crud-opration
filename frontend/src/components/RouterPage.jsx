import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserList from './UserList'

function RouterPage() {
  return (
  <>
    <Routes>
        <Route path='/business-overview' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/accounts' element={<Home />} />
    </Routes>
  </>
  )
}

export default RouterPage

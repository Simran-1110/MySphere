import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
<<<<<<< HEAD
    <div className='min-h-screen flex flex-wrap content-between' style={{ backgroundColor: '#FDFBEE' }}>
      <div className='w-full block'>
        <Header />
        <main> 
        <Outlet />
=======
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
>>>>>>> 8074a19602c7a711c84d6e10eb8547674c1ddfb3
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
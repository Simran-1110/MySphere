import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then( () => {
            dispatch(logout());  //store ke andr saari infor updated rhe
        })
    }

    return (
<<<<<<< HEAD
        <button className='px-6 py-2 gap-4 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white hover:text-[#4A4947] text-xl font-semibold text-[#FFFDF6]' onClick={logoutHandler}>Logout</button>
=======
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
>>>>>>> 8074a19602c7a711c84d6e10eb8547674c1ddfb3
    )
}

export default LogoutBtn

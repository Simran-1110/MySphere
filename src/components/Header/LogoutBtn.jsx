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
        <button className='gap-4 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white hover:text-[#4A4947] text-xl font-semibold text-[#FFFDF6]' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn

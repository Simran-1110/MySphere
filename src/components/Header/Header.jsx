import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const navigate = useNavigate()

  return (
    <header className='p-3 shadow' style={{ backgroundColor: '#4A4947' }}>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className='flex justify-center items-center m-4'>
                <button
                onClick={() => navigate(item.slug)}
                className='flex justify-center items-center gap-4 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white hover:text-[#4A4947] text-xl font-semibold text-[#FFFDF6]'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li className='flex justify-center items-center m-4'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
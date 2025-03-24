import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/Navbar'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1'>
          <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout
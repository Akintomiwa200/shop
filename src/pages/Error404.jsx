import React from 'react'
import {Link} from 'react-router-dom'
const Error404 = () => {
    return (
        <>
            <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center '>
                <h1 className='text-4xl lg:text-8xl text-bold m-8 '>404</h1>
                <h3 className='text-gray-400 lg:text-4xl text-2xl'>Page Not Found</h3>
                <Link to='/' className='border p-4 rounded-full mt-16 border-blue-900'><h6>Return to Homepage</h6></Link>
            </div>
        </>
    )
}
export default Error404
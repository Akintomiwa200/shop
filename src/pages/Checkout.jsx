import React from 'react'
import Header2 from '../components/prod/Header2'
import CartItems from '../components/checkout/CartItems'
import Summary from '../components/prod/Summary'
import Footer from '../components/Footer'



const Checkout = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <Header2 />
                <div className='flex justify-center items-center'>
                    <CartItems />
                    <Summary />
                </div>
                <Footer className='w-[100vw]' />
            </div>
        </>
    )
}


export default Checkout